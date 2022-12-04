/* eslint-disable no-unreachable */
import React, { useState, useEffect, useRef } from "react";
import ApiService from "services/ApiService";
import MandateOfBusinessProcessor from "../templates/MandateOfBusinessProcessor";
import SuperbonusPreliminaryMembershipContract from "../templates/SuperbonusPreliminaryMembershipContract";
import ProfessionalBenefitAgreement from "../templates/ProfessionalBenefitAgreement";
import Contract from "../templates/Contract";
import ProfesionalAssignment from "../templates/ProfessionalAssignment";
import SuperBonusTechnicianAssignment from "../templates/SuperBonusTechnicianAssignment";
import ReactToPrint from "react-to-print";

import { FilePdfOutlined, MailOutlined } from "@ant-design/icons";

import { Button, message } from "antd";
function ViewContract() {
  const componentRef = useRef();
  const key = window.location.pathname.slice(28);
  const [contract, setContractData] = useState([]);
  const [clientData, setClientData] = useState([]);
  console.log(contract);
  console.log(clientData);
  const fetch = () => {
    ApiService.GetById("Contract/GetById", key).then((data) => {
      setContractData(data);
    });
  };
  const fetchClient = () => {
    contract.clientId !== undefined &&
      contract.clientId !== null &&
      ApiService.GetById("Client/GetById", contract.clientId).then((data) => {
        setClientData(data);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    fetchClient();
  }, [contract.clientId]);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button type="primary">
            <FilePdfOutlined type="printer" />
            <span className="ml-1">Export</span>
          </Button>
        )}
        content={() => componentRef.current}
      />
      <span className="ml-1"></span>
      <hr className="d-print-none" />

      {contract.templateId === 1 ? (
        <MandateOfBusinessProcessor
          data={contract}
          ref={componentRef}
          client={clientData}
        />
      ) : contract.templateId === 2 ? (
        <SuperbonusPreliminaryMembershipContract
          data={contract}
          ref={componentRef}
          client={clientData}
        />
      ) : contract.templateId === 3 ? (
        <ProfessionalBenefitAgreement
          data={contract}
          ref={componentRef}
          client={clientData}
        />
      ) : contract.templateId === 4 ? (
        <Contract data={contract} ref={componentRef} client={clientData} />
      ) : contract.templateId === 5 ? (
        <ProfesionalAssignment
          data={contract}
          ref={componentRef}
          client={clientData}
        />
      ) : (
        <SuperBonusTechnicianAssignment
          data={contract}
          ref={componentRef}
          client={clientData}
        />
      )}
    </div>
  );
}

export default ViewContract;
