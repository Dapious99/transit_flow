"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "MVP Development",
    status: "completed",
    quarter: "Q3 2025",
    milestones: [
      "Core fleet tracking engine with GPS integration",
      "Web dashboard and driver mobile app (iOS & Android)",
      "Basic route planning and trip history",
      "Pilot onboarding with 3 Lagos logistics companies",
    ],
  },
  {
    phase: "Phase 2",
    title: "Beta Testing & AI Routing",
    status: "in_progress",
    quarter: "Q4 2025 – Q2 2026",
    milestones: [
      "AI-powered route optimisation engine (beta)",
      "Driver behaviour scoring and anomaly detection",
      "Fuel consumption monitoring and alerts",
      "Expanding to 10+ pilot partners across Nigeria",
    ],
  },
  {
    phase: "Phase 3",
    title: "AI Model Improvement",
    status: "upcoming",
    quarter: "Q2 – Q3 2026",
    milestones: [
      "Predictive maintenance using LSTM models",
      "Computer vision for dashcam-based driver monitoring",
      "Real-time traffic integration with Lagos/Abuja feeds",
      "NVIDIA TensorRT inference optimisation at scale",
    ],
  },
  {
    phase: "Phase 4",
    title: "Production Cloud Deployment",
    status: "upcoming",
    quarter: "Q4 2026",
    milestones: [
      "Full AWS production deployment (S3, RDS, ECS, CloudFront)",
      "Amazon Bedrock AI assistant for dispatching queries",
      "AWS IoT Core integration for 1,000+ vehicle devices",
      "SOC 2 compliance and enterprise security posture",
    ],
  },
  {
    phase: "Phase 5",
    title: "GPU-Accelerated Scaling",
    status: "upcoming",
    quarter: "Q1 2027",
    milestones: [
      "NVIDIA Jetson edge AI deployment across pilot fleet",
      "Triton Inference Server for multi-model serving at scale",
      "CUDA-accelerated retraining pipeline for continuous learning",
      "Real-time inference for 10,000+ simultaneous vehicles",
    ],
  },
  {
    phase: "Phase 6",
    title: "West African Expansion",
    status: "upcoming",
    quarter: "Q2 – Q4 2027",
    milestones: [
      "Ghana launch: Accra and Kumasi corridors",
      "Kenya expansion: Nairobi and Mombasa freight networks",
      "Pan-African data partnerships and regulatory compliance",
      "Series A fundraising and 50,000+ vehicles under management",
    ],
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    label: "Completed",
  },
  in_progress: {
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/40",
    label: "In Progress",
  },
  upcoming: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-secondary",
    border: "border-border",
    label: "Upcoming",
  },
};

export function RoadmapSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Product Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Where We Are & </span>
            <span className="text-gradient">Where We Are Going</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A transparent, phased plan — from MVP and beta testing today to
            GPU-accelerated Pan-African scale by 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => {
            const config =
              statusConfig[phase.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-card rounded-2xl p-6 border ${config.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center`}
                    >
                      <StatusIcon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {phase.phase}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${config.bg} ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {phase.quarter}
                </p>

                <ul className="space-y-2">
                  {phase.milestones.map((milestone) => (
                    <li
                      key={milestone}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${config.color.replace("text-", "bg-")} mt-1.5 shrink-0`}
                      />
                      {milestone}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
