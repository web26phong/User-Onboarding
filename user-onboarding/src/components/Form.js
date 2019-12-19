import React, {useState, useEffect} from "react";
import {FormStyle, FieldSection, StyledLabel, FormSection, FormContainer} from "../Styles";
import {withFormik, Form, Field, yupToFormErrors} from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({values, errors, touched, status}) => {

    return (
            <Form>
                <FormContainer>
                    <FormSection>
                        <FormStyle>
                            <FieldSection>
                                <StyledLabel htmlFor="name">Name: </StyledLabel>
                                <Field id="name" type="text" name="name" placeholder="enter name here"/>
                            </FieldSection>

                            <FieldSection>
                                <StyledLabel htmlFor="email">Email: </StyledLabel>
                                <Field id="email" type="email" name="email" placeholder="enter email here"/>
                            </FieldSection>

                            <FieldSection>
                                <StyledLabel htmlFor="password">Password: </StyledLabel>
                                <Field id="password" type="password" name="password" placeholder="enter password here"/>
                            </FieldSection>

                            <FieldSection>
                                <label htmlFor="ToS">I understand and accept the Terms of Service: </label>
                                <Field id="ToS" type="checkbox" name="acceptedToS" check={values.ToS}/>
                            </FieldSection>

                            <FieldSection>
                                <button type="submit">Submit</button> 
                            </FieldSection>
                        </FormStyle>
                </FormSection>

                <FormSection>
                        {touched.name && errors.name && (<span>{errors.name}</span>)}
                        {touched.email && errors.email && (<span>{errors.email}</span>)}
                        {touched.password && errors.password && (<span>{errors.password}</span>)}
                        {touched.acceptedToS && errors.acceptedToS && (<span>{errors.acceptedToS}</span>)}
                </FormSection>
                </FormContainer>
                
            </Form>
    );
}

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, ToS}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            acceptedToS: ToS || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("A name is required."),
        email: Yup.string().required("A valid email address is required."),
        password: Yup.string().required("A password is required."),
        ToS: Yup.boolean().oneOf([true], "You must accept the Terms of Service to continue.")
    }),

    handleSubmit(values, {setStatus, resetForm}){
        console.log("submit button clicked. form values are: ", values);
        axios
            .post(`https:/reqres.in/api/users/`, values)
            .then(res => {
                console.log("successfully posted to endpoint. the response is: ", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err=>{
                console.log("The data was not posted.", err);
            })
    }

})(UserForm);

export default FormikUserForm;