import { useFormik } from "formik"

export default function FormikValidation(){

    function VerifyUserDetails(Userdetails){
        const errors={};  //errors is an object and userdetails means the form collecting  data in the form to verify the errors
        if( Userdetails.UserName==="important"){
            errors.UserName="Username is requird*";
        }else if(Userdetails.UserName.length<4){
            errors.UserName="Username is too short";
        }else if(Userdetails.UserName.length>10){
            errors.UserName="Username is long";
        }


       if(Userdetails.Mobile===""){
        errors.Mobile="Mobile number required*";
       }else if(Userdetails.Mobile.match(/\+91\d{10}/)){
        errors.Mobile="";
       }else{
        errors.Mobile="invalid";
       }

        if( Userdetails.Email===""){
            errors.Email="Email is requird*";
        }else if(Userdetails.Email.indexOf('@')<=2){
            errors.Email="Email is Error*";
        }


        if( Userdetails.Password===""){
            errors.Password="Password is requird*";
        }

        return errors;
    }

    const formik =useFormik({
        initialValues:{
        UserName:'',
        Mobile:'',  
        Email:'',
        Password:''
        },
       validate:VerifyUserDetails,
       onSubmit:values=>{
        alert(JSON.stringify(values))
       }
      

    })


    return(
        <div className="container-fluid">
            <h2>Register user</h2>
            <form onSubmit={formik.handleSubmit}>
                <dt>NAME</dt>
                <dd><input name="UserName" onChange={formik.handleChange} type='text'/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
                <dt>EMAIL</dt>
                <dd><input  name="Email" onChange={formik.handleChange} type='text'/></dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <dt>PASSWORD</dt>
                <dd><input name="Password"onChange={formik.handleChange} type='text'/></dd>
                <dd className="text-danger">{formik.errors.Password}</dd>
                <button  className="btn bg-danger" >Register</button>
            </form>
        </div>
    )
}