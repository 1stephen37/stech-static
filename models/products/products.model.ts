import { ApiUrl, FetchGet, tableName } from "@/app/constants"
import useSWR from 'swr';
// import useSWRMutation from "swr/mutation";

const ProductsModel = {
    url: `${ApiUrl}${tableName.products}`,
    GetActiveProduct() {
        const { data: certificates, error, isLoading }: { data: { data: Product[], paging: { total: number } }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet);
        return {
            data: certificates?.data,
            isLoading,
            isError: error
        }
    },
    // GetDetailCertificate(id: string) {
    //     const {data, error, isLoading}: { data: { data: Certificate }, error: Error | any, isLoading: boolean } =
    //         useSWR(this.url + `/${id}`, FetchGet);
    //     return {
    //         data: data?.data,
    //         isLoading,
    //         isError: error
    //     }
    // },
}
export default ProductsModel;