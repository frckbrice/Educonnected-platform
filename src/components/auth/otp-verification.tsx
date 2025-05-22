"use client"

import { useState, useEffect } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Mail,
    Clock,
    CheckCircle2,
    RefreshCw,
    Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VscWorkspaceTrusted } from "react-icons/vsc";

interface OtpVerificationProps {
    email?: string
    onBack?: () => void
    onVerify?: (otp: string) => void
    className?: string
}

const OtpVerification = ({
    email = "user@example.com",
    onBack,
    onVerify,
    className
}: OtpVerificationProps) => {
    const [otp, setOtp] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
    const [canResend, setCanResend] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Timer countdown
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    // Format time display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // add artificial delay to simulate network request
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


    // Handle OTP change
    const handleOtpChange = (value: string) => {
        setOtp(value);
        setVerificationStatus('idle');

        // Auto-verify when complete
        if (value.length === 4) {
            handleVerify(value);
        }
    }

    // Handle verification
    const handleVerify = async (otpValue: string) => {
        setIsVerifying(true)

        try {
            // const response = await fetch('/api/verify-otp', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         email,
            //         otp: otpValue
            //     })
            // });

            // if (!response.ok) {
            //     throw new Error(response.statusText || 'Verification failed')
            // }
            // const result = await response.json()

            // Mock verification logic
            if (otpValue === '1234') {
                console.log('OTP verified successfully');
                setVerificationStatus('success');
                await delay(3000);
                onVerify?.(otpValue); // sure that the onVerify function is called only when the OTP is verified successfully
            } else {
                setVerificationStatus('error');
                // Clear OTP on error
                setTimeout(() => {
                    setOtp("");
                    setVerificationStatus('idle');
                }, 2000)
            }
        } catch (error) {
            setVerificationStatus('error');
        } finally {
            setIsVerifying(false);
        }
    }

    // Handle resend
    const handleResend = async () => {
        setIsResending(true)

        try {
            // Simulate API call
            // await fetch('/api/resend-otp', {
            //     method: 'POST',
            //     body: JSON.stringify({ email })
            // })

            // Reset timer
            setTimeLeft(300)
            setCanResend(false)
            setOtp("")
            setVerificationStatus('idle')
        } catch (error) {
            console.error('Failed to resend OTP')
        } finally {
            setIsResending(false)
        }
    }

    return (
        <div className={cn("w-full max-w-md mx-auto", className)}>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
                <CardHeader className="text-center pb-2">
                    {/* Back Button */}
                    <div className="flex items-center justify-between mb-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onBack}
                            className="p-2 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800">
                            <Shield className="w-3 h-3 mr-1" />
                            Secure Verification
                        </Badge>
                    </div>

                    {/* Header Icon */}
                    <div className="relative mx-auto mb-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <VscWorkspaceTrusted className="w-8 h-8 text-white" />
                        </div>
                        {verificationStatus === 'success' && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>

                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                        Verify Your Email
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        We've sent a 4-digit verification code to
                        <div className="flex items-center justify-center gap-2 mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-gray-100">{email}</span>
                        </div>
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* OTP Input */}
                    <div className="flex flex-col items-center space-y-4">
                        <InputOTP
                            maxLength={4}
                            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                            value={otp}
                            onChange={handleOtpChange}
                            disabled={isVerifying || verificationStatus === 'success'}
                        >
                            <InputOTPGroup className="gap-3">
                                {Array.from({ length: 4 }, (_, index) => (
                                    <InputOTPSlot
                                        key={index}
                                        index={index}
                                        className={cn(
                                            "w-14 h-14 text-xl font-bold border-2 rounded-xl transition-all duration-200",
                                            "focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30",
                                            verificationStatus === 'error' && "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/20",
                                            verificationStatus === 'success' && "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20",
                                            isVerifying && "animate-pulse",
                                            "hover:border-gray-400 dark:hover:border-gray-600"
                                        )}
                                    />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>

                        {/* Status Messages */}
                        {verificationStatus === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm animate-in slide-in-from-bottom-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Invalid code. Please try again.
                            </div>
                        )}

                        {verificationStatus === 'success' && (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm animate-in slide-in-from-bottom-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Verification successful!
                            </div>
                        )}

                        {isVerifying && (
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm">
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Verifying code...
                            </div>
                        )}
                    </div>

                    {/* Timer and Resend */}
                    <div className="text-center space-y-3">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            {timeLeft > 0 ? (
                                <span>Code expires in {formatTime(timeLeft)}</span>
                            ) : (
                                <span className="text-red-500 dark:text-red-400">Code has expired</span>
                            )}
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Didn't receive the code?{" "}
                            <button
                                onClick={handleResend}
                                disabled={!canResend || isResending}
                                className={cn(
                                    "font-medium underline underline-offset-2 transition-colors",
                                    canResend && !isResending
                                        ? "text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                                        : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                )}
                            >
                                {isResending ? (
                                    <span className="flex items-center gap-1">
                                        <RefreshCw className="w-3 h-3 animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    "Resend code"
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Manual Verify Button (shown when OTP is incomplete) */}
                    {otp.length === 4 && verificationStatus === 'idle' && !isVerifying && (
                        <Button
                            onClick={() => handleVerify(otp)}
                            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                        >
                            Verify Code
                        </Button>
                    )}

                    {/* Help Text */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            Having trouble? Check your spam folder or contact support for assistance.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default OtpVerification;
