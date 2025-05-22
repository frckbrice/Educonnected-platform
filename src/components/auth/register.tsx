"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { GraduationCap, Users, ChevronLeft, Eye, EyeOff } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import UserProfileType from "./user-profile-type";
import { redirect, useRouter } from "next/navigation";


const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long.",
        })
        .max(32, {
            message: "Password must not exceed 32 characters.",
        })
    // .regex(/[A-Z]/, {
    //     message: "Password must contain at least one uppercase letter.",
    // })
    // .regex(/[a-z]/, {
    //   message: "Password must contain at least one lowercase letter.",
    // })
    // .regex(/[0-9]/, {
    //   message: "Password must contain at least one number.",
    // })
    // .regex(/[^A-Za-z0-9]/, {
    //   message: "Password must contain at least one special character.",
    // }),
    ,
    name: z.string().min(1, {
        message: "Name is required.",
    }),
    school: z.string().min(1, {
        message: "School is required.",
    }),
    class: z.string().optional(),
    phone: z.string().optional(),
});

// Type inference for the form schema
type FormValues = z.infer<typeof formSchema>;

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [userType, setUserType] = useState<'student' | 'teacher' | null>(null)
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        school: '',
        class: '',
        year: '',
        phone: '',
        name: '',
        email: '',
        password: ''
    });
    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            school: "",
            class: "",
            phone: "",
        },
    });

    const year = new Date().getFullYear().toString();

    const onSubmit = (data: FormValues) => {
        console.log("user data", { userType, year, ...data });
        // Handle login logic here
        router.push(`/auth/verification-otp?email=${encodeURIComponent(data.email)}`);
    }

    const onError = (errors: any) => {
        console.log(errors)
        // Handle error logic here
    }

    const resetForm = () => {
        setUserType(null)
        setFormData({
            school: '',
            class: '',
            name: '',
            email: '',
            password: '',
            year: '',
            phone: '',
        })
    }

    // Profile selection screen
    if (!userType) {
        return (
            <UserProfileType setUserType={setUserType} className={className} {...props} />
        )
    }

    // Registration form
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetForm}
                            className="p-1 h-8 w-8"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div>
                            <CardTitle className="text-xl">
                                {userType === 'student' ? 'Student Registration' : 'Teacher Registration'}
                            </CardTitle>
                            <CardDescription>
                                {userType === 'student'
                                    ? 'Fill in your academic details to create your student account'
                                    : 'Enter your professional information to create your teacher account'
                                }
                            </CardDescription>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <Badge
                            variant="outline"
                            className={userType === 'student' ? 'border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-300' : 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-300'}
                        >
                            {userType === 'student' ? (
                                <>
                                    <GraduationCap className="w-3 h-3 mr-1" />
                                    Student Profile
                                </>
                            ) : (
                                <>
                                    <Users className="w-3 h-3 mr-1" />
                                    Teacher Profile
                                </>
                            )}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="school"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormLabel>School</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="your school" {...field} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Your email will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {userType === 'student' && (<FormField
                                control={form.control}
                                name="class"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormLabel>Class</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="your class" {...field} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />)
                            }
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormLabel>Full Name</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input placeholder={userType === 'student' ? 'Your full name as in birth certificate' : 'Your complete professional name'} {...field} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem >
                                        <div className="flex items-center space-x-2">
                                            <FormLabel>Phone Number</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input type="phone" placeholder={'your phone number'} {...field} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormLabel> Email Address</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input placeholder={userType === 'student' ? 'student@example.com' : 'teacher@school.edu'} {...field}
                                                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <FormLabel>Password</FormLabel>
                                                <span className="text-red-500">*</span>
                                            </div>
                                            <a
                                                href="/auth/forgot-password"
                                                className="inline-block text-sm underline-offset-4 hover:underline text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="your password"
                                                    className="pr-10"
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                                                    tabIndex={-1}
                                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className={cn(
                                        "w-full h-11 font-medium transition-all duration-200 transform hover:scale-105",
                                        userType === 'student'
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                                    )}
                                >
                                    Create {userType === 'student' ? 'Student' : 'Teacher'} Account
                                </Button>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <a
                                        href="/auth/login"
                                        className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4 transition-colors"
                                    >
                                        Sign in here
                                    </a>
                                </p>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}