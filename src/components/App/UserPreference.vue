<template>
  <p class="text-2xl bg-black">user preference</p>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const UserPreference = localStorage.getItem("userPreference");

if (!UserPreference) {
  // do somthing
} else {
  generateUserPReference();
}

function generateUserPReference() {
  const lang = detectUserLang();

  const newUserPreference = {
    lang: lang,
    theme: ""
  };

  // localStorage.setItem("userPreference", newUserPreference);
  console.log(newUserPreference);
}

function detectUserLang() {
  let lang = "en";
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const detectedLang = tz.includes("Tehran");

  if (detectUserLang) {
    lang = "fa";
  }

  // change local if is not in correct language
  const fullPath = useRoute().fullPath;
  if (!fullPath.includes(lang)) {
    const updatedRouteWithCorrectLang = fullPath.replace(
      fullPath.split("/")[1],
      lang
    );
  }
  return lang;
}
</script>