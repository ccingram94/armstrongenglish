'use client';
import PlacementTest from "../../components/PlacementTest";
import questions from '../../testdata';
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'react-i18next';

function Test() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-hero bg-cover bg-center w-full text-center justify-center items-center">
      <div className="w-full h-full bg-violet-900/90 min-h-screen">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-white">English Test</h1>
        <PlacementTest questions={questions} />
      </div>
  </div>
  );
}

export default Test;