import { useEffect, useState } from "react"

import PageComponent from "./PageComponent"
import Step1Form from "../components/Step1Form/Index"
import { getLibro } from "../api"

function Step1() {
    const [libros, setLibros] = useState()

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await getLibro(1)

                setLibros(response)

                return response
            } catch(error) {
                // Por ejemplo `getLibro(999)` logueare un error acá
                console.log(error)
            }
        }

        fetchData()
    }, [])

    console.log('LIBROS: ', libros)

    return (
        <PageComponent>
            <Step1Form />
        </PageComponent>
    )
}

export default Step1