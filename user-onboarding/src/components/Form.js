import React from "react";
import {FormStyle, FieldSection, StyledLabel} from "../Styles";
import {withFormik, Form, Field} from "formik";

const UserForm = ({values}) => {
    return (
        <div>
            <Form>
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
                        <Field id="ToS" type="checkbox" name="ToS" check={values.ToS}/>
                    </FieldSection>

                    <FieldSection>
                    <button>Submit</button> 
                    </FieldSection>

                </FormStyle>
            </Form>
        </div>
    );
}

const FormikUserForm = withFormik({
    mapPropsToValues({}){
        return {

        }
    },

})(UserForm);

export default FormikUserForm;