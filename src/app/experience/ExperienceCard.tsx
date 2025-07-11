import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Experience } from './ExperienceData';


interface ExperienceCardProps {
    data: Experience;
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
    const Icon = data.icon;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
        >
            {/* Timeline marker */}
            <span className="absolute left-4 top-4 w-6 h-6 bg-primary dark:bg-secondary rotate-45 shadow-lg" />
            <Card className="ml-6 pl-4 border-l-4 border-secondary bg-primary dark:bg-secondary shadow-md hover:shadow-lg transition-shadow text-white">
                <CardHeader>
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-secondary/20 rounded-full">
                            <Icon className="text-secondary text-2xl animate-pulse" />
                        </div>
                        <div>
                            <CardTitle className="text-lg font-semibold">
                                {data.position}
                            </CardTitle>
                            <CardDescription className="text-sm text-grey">
                                {data.companyName} • {data.startDate} – {data.endDate}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="mt-2 space-y-4">
                    <p className="text-sm text-primary-foreground">
                        {data.jobDescription}
                    </p>
                    <div>
                        <p className="font-medium text-sm mb-1">Responsibilities:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {data.responsibilities.map((resp, idx) => (
                                <li key={idx}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.languagesAndFrameworks.map((lang, idx) => (
                            <Badge key={idx} variant="outline" className='bg-secondary'>
                                {lang}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
