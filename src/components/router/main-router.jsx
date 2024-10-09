import { Home } from "../../pages/home";
import { About } from "../../pages/about";
import { Contact } from "../../pages/contact";
import { Sale } from "../../pages/sale";
import { Installment } from "../../pages/installment";
import {Servise} from "../../pages/servise"
import { nanoid } from 'nanoid';

export const MainRouter = [
    {
        id: nanoid(),
        component: Home
    },
    {
        id: nanoid(),
        path: "about",
        component: About
    },
    {
        id: nanoid(),
        path: "sale",
        component: Sale
    },
    {
        id: nanoid(),
        path: "installment",
        component: Installment
    },
    {
        id: nanoid(),
        path: "servise",
        component: Servise
    },
    {
        id: nanoid(),
        path: "contact",
        component: Contact
    },
]