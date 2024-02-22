const copyButtonLabel = "Copy Code";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 2000);
}





// var codeBlocks = document.querySelectorAll('pre.highlight');

// codeBlocks.forEach(function (codeBlock) {
//     var copyButton = document.createElement('button');
//     copyButton.className = 'copy';
//     copyButton.type = 'button';
//     copyButton.ariaLabel = 'Copy code to clipboard';
//     copyButton.innerText = 'Copy';
  
//     codeBlock.append(copyButton);
  
//     copyButton.addEventListener('click', function () {
//       var code = codeBlock.querySelector('code').innerText.trim();
//       window.navigator.clipboard.writeText(code);
  
//       copyButton.innerText = 'Copied';
//       var fourSeconds = 4000;
  
//       setTimeout(function () {
//         copyButton.innerText = 'Copy';
//       }, fourSeconds);
//     });
//   });