'use client';

const { useParams, usePathname, useSearchParams } = require("next/navigation");
const { useRouter } = require("next/navigation");

const Channelcomp = () => {
    const router = useRouter();
    const params = useParams();
    const path = usePathname();
    const searchparams = useSearchParams();

    return (
        <>
            <h1>{params.slug}</h1>
            <button onClick={() => {
                router.push("/youtubechannel?country=ind");
            }}>
                Click me
            </button>
            <h1>path is {path}</h1>
            <h2> country is {searchparams.get("country")}</h2>
        </>
    );
};

export default Channelcomp;
