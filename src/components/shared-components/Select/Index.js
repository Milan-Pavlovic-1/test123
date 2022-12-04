import React, { useState, useEffect } from "react";
import { components } from "react-select";
import Createable from "react-select/creatable";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

var serviceLangToUSe = "lang/locales/it_IT.json";

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement((props) => {
  const onMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});
const SortableSelect = SortableContainer(Createable);

export default function MultiSelectSort({ data, lang, func, mode }) {
  const [currentLang, SetCurrentLang] = useState();
  const [selected, setSelected] = useState([]);
  mode !== "EDIT" && func(selected);

  const onChange = (selectedOptions) => setSelected(selectedOptions);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
  };
  useEffect(() => {
    if (lang === "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(lang);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(lang);
    }
  }, [lang]);
  return (
    <SortableSelect
      placeholder={serviceLangToUSe.SelectItems}
      axis="xy"
      onSortEnd={onSortEnd}
      distance={0}
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      isMulti
      options={data}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      value={selected}
      onChange={onChange}
      components={{
        MultiValue: SortableMultiValue,
      }}
      closeMenuOnSelect={false}
    />
  );
}
