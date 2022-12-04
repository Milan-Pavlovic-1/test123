import { cloneElement } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import jwt from 'jwt-decode'

const hasPermission = ({ userPermissions, scopes, template }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });
  const templateMap = [];
  userPermissions.forEach((t) => {
     if(t.title === template){
      templateMap.push(t);
     }
  });
  const final = [];
  const obj = templateMap[0]
  Object.keys(obj).forEach(key => {
    if(obj[key] === true){
      final.push(key);
    }  
  });
  return final.some((permission) => scopesMap[permission]);
};

function PermissionsGate({
  children,
  RenderError = () => <></>,
  errorProps = null,
  scopes = [],
  template, 
  ...props
}) {
  const userPermissions = JSON.parse(jwt(localStorage.getItem('auth_token')).Privileges);

  const permissionGranted = hasPermission({ userPermissions, scopes, template });

  if (!permissionGranted && !errorProps) return <RenderError />;

  if (!permissionGranted && errorProps)
    return cloneElement(children, { ...errorProps });

  return <>{children}</>;
}

const mapStateToProps = ({ theme, auth }) => {
  const { locale, direction } =  theme;
  const { token } = auth;
  return { locale, token, direction}
};

export default withRouter(connect(mapStateToProps)(PermissionsGate));
