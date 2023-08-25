
import { createAction } from "@reduxjs/toolkit";

export const loginuser = createAction('login', (data) => ({
    payload: {
        name: data.user.name,
        email: data.user.email,
        id: data.user.id
    }
}))

export const logoutuser = createAction('logout')

export const addexams = createAction('addexams', (data) => ({
    payload: data
}))

export const taketest = createAction('taketest',(data) =>({
    payload: data
}))

export const addques = createAction('addques')

export const starttimer = createAction('starttimer')

export const chooseoption = createAction('chooseoption')

export const addresults = createAction('addresults')
