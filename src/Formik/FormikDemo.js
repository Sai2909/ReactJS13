import { Formik, useFormik } from "formik"


export default function FormikDemo() {
    const formik= useFormik({
        initialValues:{
            Username:'',
            Password:'',
            City:'',
            Subscribe:true
        },
        // onSubmit:function(values){
        //     alert(JSON.stringify(values));
        // }
        onSubmit:values=>{
           // alert(JSON.stringify(values));
           alert(`Username:${values.Username} \n subscription: ${(values.Subscribe===true)?'subscribed':'unssubscribed'}`);
        }

    })

    return (
        <div className=" container-fluid">
            <h2>REGISTER USER</h2>
            <form onSubmit={formik.handleSubmit}>
                <dt>Name</dt>
                <dd> <input name="Username" value={formik.values.Username} onChange={formik.handleChange} type="text" /></dd>
                <dt>Password</dt>
                <dd> <input name="Password"value={formik.values.Password} onChange={formik.handleChange} type="password" /></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" value={formik.values.City} onChange={formik.handleChange}>
                        <option>Jagitial</option>
                        <option>Karimnagaar</option>
                    </select>
                </dd>
                <dt>Subscribe</dt>
                <dd><input name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange} type="checkbox"/>Subscribed</dd>
                <button >Submit</button>
            </form>
        </div>
    )
}