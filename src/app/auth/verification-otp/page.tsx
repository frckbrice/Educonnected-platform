'use client';


import { OtpVerification } from "@/components/auth";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    console.log("Email from URL: ", email);

    const handleOtpVerify = async () => {
        try {
            router.push('/dashboard')
        } catch (error) {
            throw new Error('Invalid OTP')
        }
    }


    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <OtpVerification
                    email={email as string}
                    onVerify={handleOtpVerify}
                    onBack={() => router.push('/auth/login')}
                />
            </div>
        </div>
    )
}
