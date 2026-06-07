"use client"

import React from "react"
import { Check } from "lucide-react"

interface Milestone {
  quarter: string
  title: string
  description: string
  status: "done" | "in-progress" | "planned"
}

interface RoadmapCardProps {
  milestones: Milestone[]
}

export function RoadmapCard({ milestones }: RoadmapCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[15px] top-0 bottom-0 w-0.5"
          style={{ backgroundColor: "#E8E0D0" }}
        />

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Status indicator */}
              <div className="relative z-10 flex-shrink-0">
                {milestone.status === "done" ? (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#1F4C9C" }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : milestone.status === "in-progress" ? (
                  <div
                    className="w-8 h-8 rounded-full border-4 flex items-center justify-center"
                    style={{
                      borderColor: "#1F4C9C",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#1F4C9C" }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-full border-2"
                    style={{
                      borderColor: "#E8E0D0",
                      backgroundColor: "#FFFFFF",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                  style={{
                    backgroundColor:
                      milestone.status === "done"
                        ? "#E8F5E9"
                        : milestone.status === "in-progress"
                        ? "#FFF3E0"
                        : "#F5F5F5",
                    color:
                      milestone.status === "done"
                        ? "#2E7D32"
                        : milestone.status === "in-progress"
                        ? "#E65100"
                        : "#616161",
                  }}
                >
                  {milestone.quarter}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#1A1F3C" }}
                >
                  {milestone.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B7689" }}
                >
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
