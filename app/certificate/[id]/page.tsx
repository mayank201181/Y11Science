"use client";

import { useParams, notFound } from "next/navigation";
import { getTopic } from "@/lib/content";
import { Certificate } from "@/components/Certificate";

export default function CertificatePage() {
  const { id } = useParams<{ id: string }>();
  const topic = getTopic(id);
  if (!topic) return notFound();
  return <Certificate topic={topic} />;
}
