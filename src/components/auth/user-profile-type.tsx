"use client";

import React, { SetStateAction } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { GraduationCap, Users, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';


type Props = {
    setUserType: (value: SetStateAction<"student" | "teacher" | null>) => void;
    className?: string;
}

const UserProfileType = ({
    setUserType,
    className,
    ...props
}: Props) => {
    const router = useRouter();
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-2">
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push("/auth/login")}
                            className="p-1 h-8 w-8 ring-1"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Join Our Community
                        </CardTitle>
                    </div>

                    <CardDescription className="text-base">
                        Choose your profile to get started with a personalized experience
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="grid gap-4">
                        {/* Student Option */}
                        <button
                            onClick={() => setUserType('student')}
                            className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-left transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:scale-105 dark:from-blue-950/20 dark:to-indigo-950/20 dark:border-gray-700 dark:hover:border-blue-600"
                        >
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors dark:bg-blue-900/50 dark:group-hover:bg-blue-800/50">
                                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            I'm a Student
                                        </h3>
                                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                                            Popular
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Access learning materials, track progress, and connect with teachers and classmates
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                            📚 Course Access
                                        </span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                            📊 Progress Tracking
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                        </button>

                        {/* Teacher Option */}
                        <button
                            onClick={() => setUserType('teacher')}
                            className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-emerald-50 to-teal-100 p-6 text-left transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:scale-105 dark:from-emerald-950/20 dark:to-teal-950/20 dark:border-gray-700 dark:hover:border-emerald-600"
                        >
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-emerald-100 p-3 group-hover:bg-emerald-200 transition-colors dark:bg-emerald-900/50 dark:group-hover:bg-emerald-800/50">
                                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            I'm a Teacher
                                        </h3>
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                                            Educator
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Create courses, manage students, and share educational content with your classes
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                                            🏫 Class Management
                                        </span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                                            📝 Content Creation
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            You can always change your profile type later in settings
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserProfileType;
