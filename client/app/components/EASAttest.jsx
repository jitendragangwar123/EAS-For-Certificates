"use client";

import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

function EASAttest() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitUID, setSubmitUID] = useState("");
  const [loading, setLoading] = useState(false);

  const validateName = (name) => name.trim() !== "";
  const validateAddress = (address) => ethers.utils.isAddress(address);
  const validateMessage = (message) => message.trim() !== "";

  const isFormValid = () => {
    return validateName(name) && validateAddress(address) && validateMessage(message);
  };

  const submitAttestation = async () => {
    if (!isFormValid()) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setSubmitUID("");
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const eas = new EAS(EASContractAddress);
      eas.connect(signer);

      const schemaEncoder = new SchemaEncoder("string name, string message");
      const encodedData = schemaEncoder.encodeData([
        { name: "name", value: name, type: "string" },
        { name: "message", value: message, type: "string" },
      ]);

      const schemaUID =
        "0xb28844791177681bd44d983e8aaa017f6a378e297271a46fd20d81a5cbadc386";

      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: address,
          expirationTime: 0,
          revocable: true,
          data: encodedData,
        },
      });

      setLoading(true);
      toast.loading("Wait for transaction....!");

      const attestationId = await tx.wait();

      setLoading(false);
      toast.dismiss();
      setSubmitUID(attestationId);
      toast.success("Attestation Done!");
      setName("");
      setAddress("");
      setMessage("");
    } catch (err) {
      toast.error("Error while attestation!");
      toast.dismiss();
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex w-full flex-col items-center mt-8">
        <input
          className="w-80 p-2 mt-4 text-black rounded-md"
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-80 p-2 mt-4 text-black rounded-md"
          type="text"
          placeholder="Enter Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="w-80 p-2 mt-4 text-black rounded-md"
          type="text"
          placeholder="Enter Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={submitAttestation}
            className="w-40 p-2 text-black rounded-md bg-slate-400 hover:bg-slate-500"
            disabled={loading || !isFormValid()}
          >
            {loading ? "Submitting..." : "Submit Attestation"}
          </button>

          <a
            href={submitUID ? `https://sepolia.easscan.org/attestation/view/${submitUID}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-40 p-2 text-black rounded-md bg-slate-400 inline-block text-center ${
              !submitUID ? "disabled-link" : "hover:bg-slate-500"
            }`}
            onClick={(e) => !submitUID && e.preventDefault()}
          >
            View Attestation
          </a>
        </div>
      </div>
    </div>
  );
}

export default EASAttest;
