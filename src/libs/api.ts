
export type Data = {
    name: string;
};

export async function fetchHello() {
    return await fetch("/api/hello").then<Data>(value => value.json());
}