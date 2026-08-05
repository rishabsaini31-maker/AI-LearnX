"use client";

import React, { useState } from "react";
import { FileCheck2, Download, Eye, Send, CheckCircle2, Award, Plus, Search, Upload, FileUp } from "lucide-react";
import { Card, Button, Badge, Modal, Input } from "@/components/ui/core";
import { Certificate } from "@/types";

export function CertificatesView() {
  const [certs, setCerts] = useState<Certificate[]>([
    { id: "CERT-901", studentName: "Rahul Sharma", type: "Internship Certificate", issueDate: "2026-08-01", verificationId: "VER-AI-90128", status: "Verified" },
    { id: "CERT-902", studentName: "Priya Patel", type: "Experience Letter", issueDate: "2026-07-28", verificationId: "VER-EXP-88192", status: "Verified" },
    { id: "CERT-903", studentName: "Ananya Roy", type: "Recommendation Letter", issueDate: "2026-07-15", verificationId: "VER-LOR-77211", status: "Verified" },
  ]);

  const [interns] = useState([
    { name: "Rahul Sharma", email: "rahul@gmail.com" },
    { name: "Priya Patel", email: "priya@gmail.com" },
    { name: "Aarav Gupta", email: "aarav@gmail.com" },
    { name: "Karan Mehta", email: "karan@gmail.com" },
    { name: "Neha Verma", email: "neha@gmail.com" },
    { name: "Vikram Seth", email: "vikram@gmail.com" },
  ]);

  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendSuccessMsg, setSendSuccessMsg] = useState("");

  // Form State
  const [searchStudent, setSearchStudent] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("Rahul Sharma");
  const [certType, setCertType] = useState<Certificate["type"]>("Internship Certificate");
  const [uploadOption, setUploadOption] = useState<"auto" | "custom">("auto");
  const [customFile, setCustomFile] = useState<string | null>(null);

  const filteredInterns = interns.filter(
    (i) => i.name.toLowerCase().includes(searchStudent.toLowerCase()) || i.email.toLowerCase().includes(searchStudent.toLowerCase())
  );

  const handleIssueCertificate = () => {
    const newCert: Certificate = {
      id: `CERT-90${certs.length + 1}`,
      studentName: selectedStudent,
      type: certType,
      issueDate: new Date().toISOString().split("T")[0],
      verificationId: `VER-${Math.floor(10000 + Math.random() * 90000)}`,
      status: "Verified",
    };
    setCerts([newCert, ...certs]);
    setIsModalOpen(false);
    setSendSuccessMsg(`Certificate #${newCert.verificationId} issued & emailed to ${selectedStudent}!`);
    setTimeout(() => setSendSuccessMsg(""), 4000);
  };

  const handleSendEmail = (studentName: string) => {
    setSendSuccessMsg(`Official Credential Email sent to ${studentName}!`);
    setTimeout(() => setSendSuccessMsg(""), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Certificates & Verification Hub</h1>
          <p className="text-xs text-slate-400">Search student, upload custom PDF certificate or auto-generate & send email.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Issue & Send Certificate
        </Button>
      </div>

      {sendSuccessMsg && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {sendSuccessMsg}
        </div>
      )}

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Student Name</th>
                <th className="p-4">Document Type</th>
                <th className="p-4">Verification ID</th>
                <th className="p-4">Issue Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {certs.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{c.studentName}</td>
                  <td className="p-4">
                    <Badge variant={c.type === "Internship Certificate" ? "purple" : "info"}>{c.type}</Badge>
                  </td>
                  <td className="p-4 font-mono text-[11px] text-slate-500">{c.verificationId}</td>
                  <td className="p-4 text-slate-500">{c.issueDate}</td>
                  <td className="p-4">
                    <Badge variant="success">{c.status}</Badge>
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button
                      onClick={() => setPreviewCert(c)}
                      title="Preview PDF"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleSendEmail(c.studentName)}
                      title="Send Email to Student"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-slate-800"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal: Search Student & Custom Certificate Upload Option */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Issue & Send Verified Certificate">
        <div className="space-y-4">
          {/* Student Search Bar */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Search & Select Student / Intern</label>
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <Input
                placeholder="Type student name or email to filter..."
                value={searchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
                className="pl-9 text-xs"
              />
            </div>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100"
            >
              {filteredInterns.map((intern) => (
                <option key={intern.name} value={intern.name}>
                  {intern.name} — {intern.email}
                </option>
              ))}
              {filteredInterns.length === 0 && <option value="">No matching student found</option>}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Document / Certificate Type</label>
            <select
              value={certType}
              onChange={(e) => setCertType(e.target.value as Certificate["type"])}
              className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
            >
              <option value="Internship Certificate">Internship Certificate</option>
              <option value="Experience Letter">Experience Letter</option>
              <option value="Recommendation Letter">Letter of Recommendation (LOR)</option>
            </select>
          </div>

          {/* Certificate Generation / Upload Mode */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Certificate File Mode</label>
            <div className="flex items-center gap-4 mb-2 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="certMode"
                  checked={uploadOption === "auto"}
                  onChange={() => setUploadOption("auto")}
                />
                Auto-Generate Official PDF Template
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="certMode"
                  checked={uploadOption === "custom"}
                  onChange={() => setUploadOption("custom")}
                />
                Upload Custom Certificate (.PDF)
              </label>
            </div>

            {uploadOption === "custom" && (
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center bg-slate-50 dark:bg-slate-900">
                <FileUp className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {customFile ? `Uploaded: ${customFile}` : "Click or drag custom certificate PDF file here"}
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setCustomFile(e.target.files?.[0]?.name || null)}
                  className="mt-2 text-xs text-slate-400 cursor-pointer"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleIssueCertificate}>
              <Send className="w-4 h-4" /> Issue & Send Email
            </Button>
          </div>
        </div>
      </Modal>

      {/* PDF Certificate Preview Modal */}
      {previewCert && (
        <Modal isOpen={!!previewCert} onClose={() => setPreviewCert(null)} title="Certificate PDF Preview">
          <div className="space-y-4">
            <div className="border-4 border-blue-600 p-6 rounded-xl bg-slate-50 dark:bg-slate-950 text-center space-y-3">
              <Award className="w-12 h-12 text-blue-600 mx-auto" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest">AI LearnX Official Credential</h2>
              <p className="text-xs text-slate-500">This certifies that</p>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 underline decoration-blue-300">{previewCert.studentName}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">has successfully completed the requirements for</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{previewCert.type}</p>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span>Verification ID: {previewCert.verificationId}</span>
                <span>Date: {previewCert.issueDate}</span>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setPreviewCert(null)}>Close</Button>
              <Button onClick={() => handleSendEmail(previewCert.studentName)}>
                <Send className="w-4 h-4" /> Send Email
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
