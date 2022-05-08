import { Suspense } from "react";
import {useQuery} from "react-query";
import {fetchHello} from "../libs/api";

export default function Profile() {
    const { data } = useQuery("key", fetchHello);
    return <h2>{data!!.name}</h2>;
}
