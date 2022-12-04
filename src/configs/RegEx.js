const RegEx = {};
RegEx.LettersAndAphostrophe = new RegExp("^([a-zA-Z ']*)$");
RegEx.Letters = new RegExp("[A-Za-z]");
RegEx.Numbers = new RegExp("[0-9]");
//Messages
RegEx.LettersAndAphostropheText = "Please enter valid form";
RegEx.LettersText = "Please enter valid form";
RegEx.NumberText = "Please enter only a numbers.";
export default RegEx;
