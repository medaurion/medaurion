import type React from "react";

// Original colour icons for the chronic-care areas (medaurion).

export type ConditionIconName =
  | "diabetes"
  | "blood-pressure"
  | "thyroid"
  | "heart"
  | "kidney"
  | "anaemia"
  | "asthma"
  | "fatty-liver"
  | "cholesterol"
  | "pcos"
  | "arthritis"
  | "weight"
  | "pregnancy"
  | "more";

const icons: Record<ConditionIconName, { tint: string; art: React.ReactNode }> = {
  "diabetes": {
    tint: "#FFF0F0",
    art: (
      <>
        <path d="M26 6C19 17 11 26 11 37a15 15 0 0 0 30 0C41 26 33 17 26 6z" fill="#E5484D"/><path d="M18 36c0 5 2 8 5 10" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><rect x="36" y="34" width="21" height="26" rx="5" fill="#3B6FD8"/><rect x="39.5" y="37.5" width="14" height="9" rx="2" fill="#DDF0B5"/><path d="M42 43h3l1.5-3 2 5 1.5-2h1" stroke="#2F7A3A" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="46.5" cy="53" r="3" fill="#fff" opacity=".9"/>
      </>
    ),
  },
  "blood-pressure": {
    tint: "#EAF3FF",
    art: (
      <>
        <circle cx="27" cy="27" r="19" fill="#fff" stroke="#3B6FD8" strokeWidth="4.5"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(-120 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(-80 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(-40 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(0 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(40 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(80 27 27)"/><path d="M27 12v4" stroke="#9FB4D1" strokeWidth="2" strokeLinecap="round" transform="rotate(120 27 27)"/><path d="M27 27l9-8" stroke="#E5484D" strokeWidth="3" strokeLinecap="round"/><circle cx="27" cy="27" r="3" fill="#2B3440"/><path d="M27 46c0 8 7 11 15 9" stroke="#2B3440" strokeWidth="2.6" fill="none" strokeLinecap="round"/><ellipse cx="50" cy="53" rx="8" ry="6.5" fill="#E5484D"/><path d="M47 50c1-1 3-1 4 0" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </>
    ),
  },
  "thyroid": {
    tint: "#FFF6E2",
    art: (
      <>
        <rect x="27" y="3" width="10" height="58" rx="5" fill="#A9CBEA"/><path d="M27 9h10" stroke="#86AFD9" strokeWidth="2"/><path d="M27 15h10" stroke="#86AFD9" strokeWidth="2"/><path d="M27 21h10" stroke="#86AFD9" strokeWidth="2"/><path d="M27 43h10" stroke="#86AFD9" strokeWidth="2"/><path d="M27 49h10" stroke="#86AFD9" strokeWidth="2"/><path d="M27 55h10" stroke="#86AFD9" strokeWidth="2"/><path d="M30 31c-2-9-7-18-13-18-5 0-8 6-7 15 1 11 6 21 13 21 5 0 8-6 7-12z" fill="#F4A940"/><circle cx="16" cy="26" r="1.6" fill="#FFD27A"/><circle cx="20" cy="34" r="1.6" fill="#FFD27A"/><circle cx="15" cy="38" r="1.4" fill="#FFD27A"/><g transform="translate(64 0) scale(-1 1)"><path d="M30 31c-2-9-7-18-13-18-5 0-8 6-7 15 1 11 6 21 13 21 5 0 8-6 7-12z" fill="#F4A940"/><circle cx="16" cy="26" r="1.6" fill="#FFD27A"/><circle cx="20" cy="34" r="1.6" fill="#FFD27A"/><circle cx="15" cy="38" r="1.4" fill="#FFD27A"/></g><rect x="25" y="31" width="14" height="8" rx="4" fill="#F4A940"/>
      </>
    ),
  },
  "heart": {
    tint: "#FFEFEF",
    art: (
      <>
        <path d="M23 10v16" stroke="#4C7BE0" strokeWidth="6" strokeLinecap="round"/><path d="M29 26v-9c0-5 4-9 9-9h3c5 0 7 4 7 8v2" stroke="#D63F3F" strokeWidth="6.5" fill="none" strokeLinecap="round"/><path d="M19 27c-7 7-9 17-4 25 4 7 12 10 19 9 9-1 16-9 18-18 2-8-1-15-8-18-5-3-12-2-16 1-3-2-7-2-9 1z" fill="#E5484D"/><path d="M36 27c2-4 7-6 12-5" stroke="#4C7BE0" strokeWidth="5" fill="none" strokeLinecap="round"/><path d="M39 32c-2 7-7 12-13 16" stroke="#B93439" strokeWidth="2.2" fill="none" strokeLinecap="round"/><path d="M19 36c-1 5 0 9 3 12" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </>
    ),
  },
  "kidney": {
    tint: "#FCEDEF",
    art: (
      <>
        <path d="M30 6v52" stroke="#E04848" strokeWidth="3.5" strokeLinecap="round"/><path d="M34 6v52" stroke="#4C7BE0" strokeWidth="3.5" strokeLinecap="round"/><path d="M22 28h20" stroke="#E04848" strokeWidth="2.6"/><path d="M22 33h20" stroke="#4C7BE0" strokeWidth="2.6"/><path d="M23 36c3 3 4 8 4 14v8M41 36c-3 3-4 8-4 14v8" stroke="#F2C14E" strokeWidth="2.4" fill="none" strokeLinecap="round"/><path d="M17 12c-7 2-11 11-10 21 1 10 7 18 13 18 5 0 7-5 5-10-1-3-1-6 1-9 3-4 3-10 0-14-2-4-5-6-9-6z" fill="#C9505B"/><path d="M12 22c-2 5-2 11 0 16" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><g transform="translate(64 0) scale(-1 1)"><path d="M17 12c-7 2-11 11-10 21 1 10 7 18 13 18 5 0 7-5 5-10-1-3-1-6 1-9 3-4 3-10 0-14-2-4-5-6-9-6z" fill="#C9505B"/><path d="M12 22c-2 5-2 11 0 16" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/></g>
      </>
    ),
  },
  "anaemia": {
    tint: "#FFF0F0",
    art: (
      <>
        <circle cx="22" cy="22" r="13" fill="#E04848"/><ellipse cx="22" cy="22" rx="6.5" ry="5.46" fill="#C23535"/><path d="M14.2 17.45a9.75 9.75 0 0 1 6.5 -5.2" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="43" cy="30" r="12" fill="#E04848"/><ellipse cx="43" cy="30" rx="6" ry="5.04" fill="#C23535"/><path d="M35.8 25.8a9 9 0 0 1 6 -4.800000000000001" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="26" cy="45" r="11" fill="#F4B1B1"/><ellipse cx="26" cy="45" rx="5.5" ry="4.62" fill="#E79393"/><path d="M19.4 41.15a8.25 8.25 0 0 1 5.5 -4.4" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M50 50v8M46 54h8" stroke="#3B6FD8" strokeWidth="2.6" strokeLinecap="round"/>
      </>
    ),
  },
  "asthma": {
    tint: "#FFF1EE",
    art: (
      <>
        <path d="M32 4v18" stroke="#A9CBEA" strokeWidth="6" strokeLinecap="round"/><path d="M32 20c-2 4-5 6-7 7M32 20c2 4 5 6 7 7" stroke="#D16666" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M27 17c-9 0-17 11-19 24-1 9 1 15 7 15 7 0 12-4 13-9 1-6 1-21-1-30z" fill="#F08A8A"/><path d="M27 26c-4 3-8 5-12 6M26 34c-3 2-6 4-10 5M25 42c-2 2-5 3-8 4" stroke="#D16666" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M13 36c-1 5-1 9 1 12" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/><g transform="translate(64 0) scale(-1 1)"><path d="M27 17c-9 0-17 11-19 24-1 9 1 15 7 15 7 0 12-4 13-9 1-6 1-21-1-30z" fill="#F08A8A"/><path d="M27 26c-4 3-8 5-12 6M26 34c-3 2-6 4-10 5M25 42c-2 2-5 3-8 4" stroke="#D16666" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M13 36c-1 5-1 9 1 12" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/></g>
      </>
    ),
  },
  "fatty-liver": {
    tint: "#FFF6E2",
    art: (
      <>
        <path d="M5 25c0-7 7-12 16-12 11 0 23-2 33 1 6 2 7 7 5 11-3 7-13 13-24 17-9 3-14 8-20 8-7 0-10-10-10-25z" fill="#A34C3B"/><path d="M33 40c-1 7 2 12 6 12 3 0 4-4 3-8l-3-7z" fill="#7CC47F"/><circle cx="15" cy="24" r="3.4" fill="#F6D365"/><circle cx="24" cy="30" r="2.6" fill="#F6D365"/><circle cx="38" cy="22" r="3" fill="#F6D365"/><circle cx="14" cy="36" r="2.4" fill="#F6D365"/><circle cx="47" cy="24" r="2.2" fill="#F6D365"/><circle cx="27" cy="21" r="1.8" fill="#F6D365"/><path d="M10 22c3-3 7-5 12-5" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </>
    ),
  },
  "cholesterol": {
    tint: "#FFF6E2",
    art: (
      <>
        <circle cx="32" cy="32" r="25" fill="#D9534F"/><circle cx="32" cy="32" r="19" fill="#F3B2A4"/><path d="M14 30c1-9 8-16 17-17-6 5-9 12-9 19s3 14 9 19c-9-1-16-9-17-21z" fill="#F6C94A"/><circle cx="18" cy="26" r="1.6" fill="#FBE29A"/><circle cx="17" cy="35" r="1.6" fill="#FBE29A"/><circle cx="37" cy="32" r="10" fill="#A82A2A"/><path d="M32 26c2-2 4-3 7-3" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </>
    ),
  },
  "pcos": {
    tint: "#FDEEF3",
    art: (
      <>
        <path d="M21 18h22c0 11-3 19-7 23v12h-8V41c-4-4-7-12-7-23z" fill="#EE7E9A"/><path d="M27 21h10c0 6-2 11-5 14-3-3-5-8-5-14z" fill="#F7B2C4"/><path d="M22 21c-5-5-12-5-14 0" stroke="#EE7E9A" strokeWidth="3.5" fill="none" strokeLinecap="round"/><ellipse cx="10" cy="29" rx="7" ry="5.5" fill="#F7B2C4"/><circle cx="6.5" cy="27.5" r="1.7" fill="#fff"/><circle cx="10" cy="25.5" r="1.7" fill="#fff"/><circle cx="13.5" cy="28" r="1.7" fill="#fff"/><circle cx="8" cy="31.5" r="1.7" fill="#fff"/><circle cx="12" cy="32" r="1.5" fill="#fff"/><g transform="translate(64 0) scale(-1 1)"><path d="M22 21c-5-5-12-5-14 0" stroke="#EE7E9A" strokeWidth="3.5" fill="none" strokeLinecap="round"/><ellipse cx="10" cy="29" rx="7" ry="5.5" fill="#F7B2C4"/><circle cx="6.5" cy="27.5" r="1.7" fill="#fff"/><circle cx="10" cy="25.5" r="1.7" fill="#fff"/><circle cx="13.5" cy="28" r="1.7" fill="#fff"/><circle cx="8" cy="31.5" r="1.7" fill="#fff"/><circle cx="12" cy="32" r="1.5" fill="#fff"/></g>
      </>
    ),
  },
  "arthritis": {
    tint: "#EEF0FB",
    art: (
      <>
        <circle cx="31" cy="34" r="14" fill="#F26B6B" opacity=".28"/><path d="M24 3h14v20c4 2 6 6 4 10H20c-2-4 0-8 4-10z" fill="#F4E6C8" stroke="#D8C094" strokeWidth="1.6"/><path d="M20 39h22c2 4 0 8-4 10v12H24V49c-4-2-6-6-4-10z" fill="#F4E6C8" stroke="#D8C094" strokeWidth="1.6"/><ellipse cx="46" cy="34" rx="4" ry="5" fill="#F4E6C8" stroke="#D8C094" strokeWidth="1.6"/><path d="M8 26l5 3-3 3 5 3M54 46l-4-2 2-3-4-2" stroke="#E5484D" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  "weight": {
    tint: "#E9F7EF",
    art: (
      <>
        <rect x="10" y="12" width="44" height="44" rx="11" fill="#5B8DEF"/><rect x="14" y="16" width="36" height="36" rx="8" fill="#82AAF5"/><path d="M21 31a11 11 0 0 1 22 0z" fill="#fff"/><path d="M32 31l5-6" stroke="#E5484D" strokeWidth="2.4" strokeLinecap="round"/><path d="M4 50c11-6 21 4 33 0s15-9 23-8" stroke="#F6C94A" strokeWidth="7" fill="none" strokeLinecap="round"/><path d="M4 50c11-6 21 4 33 0s15-9 23-8" stroke="#8A6A12" strokeWidth="2" strokeDasharray="1 3.2" fill="none"/>
      </>
    ),
  },
  "pregnancy": {
    tint: "#FDEEF3",
    art: (
      <>
        <circle cx="32" cy="32" r="26" fill="#FBD3DC"/><circle cx="32" cy="32" r="20" fill="#FDE6EB"/><path d="M30 30c-8 2-12 10-9 17 3 7 12 9 18 5 5-3 6-9 3-12-2-3-6-3-8 0" fill="#F5C6A5"/><circle cx="36" cy="22" r="9" fill="#F5C6A5"/><path d="M38 21.5c1 1 2.4 1 3.4 0" stroke="#B9785A" strokeWidth="1.4" fill="none" strokeLinecap="round"/><circle cx="31.5" cy="23" r="1.8" fill="#EDA98A"/><path d="M27 41c3 3 8 4 11 2M36 31c-2 3-2 6 0 8" stroke="#E2A982" strokeWidth="1.7" fill="none" strokeLinecap="round"/><path d="M48 12c-2-3-6-1-4 2l4 4 4-4c2-3-2-5-4-2z" fill="#E5484D"/>
      </>
    ),
  },
  "more": {
    tint: "#EAF3FF",
    art: (
      <>
        <circle cx="32" cy="32" r="20" fill="#0B63CE"/><path d="M32 23v18M23 32h18" stroke="#fff" strokeWidth="4.5" strokeLinecap="round"/><path d="M52 10v6M49 13h6M10 46v5M7.5 48.5h5" stroke="#F4A940" strokeWidth="2.2" strokeLinecap="round"/>
      </>
    ),
  },
};

export function ConditionIcon({ name, size = 62 }: { name: ConditionIconName; size?: number }) {
  return (
    <svg aria-hidden="true" className="condition-art" height={size} viewBox="0 0 64 64" width={size}>
      {icons[name].art}
    </svg>
  );
}

export function conditionTint(name: ConditionIconName) {
  return icons[name].tint;
}
