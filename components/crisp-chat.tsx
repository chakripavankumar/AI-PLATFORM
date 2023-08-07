"use client"
import { use, useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("94968566-4e1d-4c99-9d05-f85115b52933")
        
    }, []);

    return null;
}