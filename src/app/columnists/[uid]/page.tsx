/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useParams } from "next/navigation";

import Header from "components/Header";

export default function Columnists() {
  const params = useParams();
  const uid = params?.uid;

  return (
    <Header />
  );
}