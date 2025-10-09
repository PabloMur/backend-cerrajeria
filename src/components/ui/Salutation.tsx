"use client"
import {useSession} from "next-auth/react"

const Salutation = () => {
    const { data: session } = useSession();
    return <p>{session?.user?.name}</p>;
}

export default Salutation