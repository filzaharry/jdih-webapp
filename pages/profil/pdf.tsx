import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useState, useEffect } from "react";


const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        fontFamily: "Inter"
    }
})

const PDF = () => {
    return(
        <Document>
            <Page  >
                <View style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
                    <Text wrap={false} style={{alignSelf: "flex-end"}}>Goodbye, world!hgdkljfhsalhgfljadhsgflhasdlhfgsaljdhgflhasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;kjashdf;kjhasd;kjfhjks;adhfkjhsadk;jfhaskjdhfkjsahdfkjhsadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
                </View>
                <View>
                    <Image src="/assets/image.png"/>
                </View>
            </Page>
        </Document>
    )
}
const PDFView = () => {

    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])

    return(
    <PDFViewer>
        <PDF/>
    </PDFViewer>
    )
}
export default PDFView