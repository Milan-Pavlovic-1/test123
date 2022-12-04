import { message, Modal } from 'antd';
import ApiService from './ApiService';


const ConfirmationModalService = {}

const { confirm } = Modal;


ConfirmationModalService.ShowModal = function (serviceName, controllerName, setResultData,title,content,FormData,id, responseMessage, reloadMethod) {

    confirm({
      title: title,
      content: content,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        {(() => {
          switch (serviceName) {
            case 'Get':
              return ApiService.Get(controllerName).then(()=>{


              });
            case 'Post':
              return ApiService.Post(controllerName,FormData).then(()=>{

                message.success(responseMessage)         

              });
            case 'Put':
              return ApiService.Put(controllerName,FormData,id).then(()=>{


              });
              case 'Delete':
                return ApiService.Delete(controllerName+"/Delete", id).then((data) => {
                  {data == true ? 
                    message.success(`${controllerName} has been deleted successfully!`)
                  : message.error('An error has occurred!');}
                  setTimeout(() => { 
                    ApiService.Get(controllerName+"/Get").then((response)=>{
                        setResultData(response);
                    });
                  },700);
                });
            default:
              return null
          }
        })()}  
      },
      onCancel() {
        
      },
    });

}

export default ConfirmationModalService