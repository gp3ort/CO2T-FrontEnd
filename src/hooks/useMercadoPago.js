import { useEffect, useState } from "react";
import useScript from "./useScript";
import { formConfig } from "../pages/formConfig";
import {useSelector } from 'react-redux'

export default function useMercadoPago() {
    const [resultPayment, setResultPayment] = useState(undefined);

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    const { user } = useSelector((store) => store.user);


    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]
    

    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago("TEST-0280e3f0-1b2b-45a5-a2ac-acadc3bdf4b6");
            const cardForm = mp.cardForm({
                amount: String(project.price),
                autoMount: true,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },

                    onSubmit: (event) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: paymentMethodId,
                            issuerId: issuerid,
                            cardholderEmail: email,
                            securityCode,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();
                        console.log(cardForm.getCardFormData());
                        fetch(
                            `https://localhost:7179/api/MercadoPago/pay`,
                            {
                                // entry point backend
                                method: "POST",
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Request-Method":
                                        "GET, POST, DELETE, PUT, OPTIONS",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    token,
                                    issuerid,
                                    paymentMethodId,
                                    transactionAmount: 1000,
                                    installments: Number(installments),
                                    productDescription: project.description,
                                    payer: {
                                        email,
                                        identification: {
                                            type: identificationType,
                                            number: identificationNumber,
                                        },
                                    },
                                    shoppingCartRequestDto:{
                                        idEntityUser: user,
                                        idProject: project.id,
                                    }
                                }),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                    onFetching: (resource) => {
                        // Animate progress bar
                        console.log(resource);
                        const progressBar =  document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }
    }, [MercadoPago]);

    return JSON.stringify(resultPayment);
}