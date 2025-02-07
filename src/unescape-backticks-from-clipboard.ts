import { Clipboard, showHUD } from "@raycast/api";

async function unescapeBackticksFromClipboard() {
  try {
    // Read the current clipboard content
    const clipboardContent = await Clipboard.readText();
    if (!clipboardContent) {
      await showHUD("Clipboard is empty or not text.");
      return;
    }

    // Replace occurrences of \` with `
    const updatedContent = clipboardContent.replace(/\\\\\\`/g, "`");

    // Write the updated content back to the clipboard
    await Clipboard.paste(updatedContent);

    // Notify the user
    await showHUD("Unescaped backticks in clipboard content.");
  } catch (error) {
    console.error("Failed to process clipboard content:", error);
    await showHUD("An error occurred.");
  }
}

export default unescapeBackticksFromClipboard;
