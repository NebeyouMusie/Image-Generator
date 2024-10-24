# Image Generator (Next.js, React, TypeScript, Tailwind CSS and Shadcn)

- This GitHub repo is an AI image generation app built using [Bot.new](https://bolt.new/).

## Image

![image generation website](/public/images/imagegen.png)

## Description

- A responsive and modern website that lets you generate images using an AI model from Hugging Face. 

## Live Project

- **URL:** [AI Image Generator](https://image-generator-delta-ochre.vercel.app/)
- **Open Live Demo:** [![Open in browser](https://img.shields.io/badge/Open_in_browser-image-generator-delta-ochre_vercel_app_--_svg?style=for-the-badge&logo=Vercel)](https://image-generator-delta-ochre.vercel.app/)

## Technologies

- Next.js
- React
- Typescript
- Tailwind CSS
- Shadcn

## Installation and Setup

1. Clone the repository: `git clone https://github.com/NebeyouMusie/file-store.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Usage

1. Open http://localhost:3000 in your browser to view the project locally.
2. Enter a prompt for the image you want to generate.
3. Wait until your image is generated.
   - **NOTE**: The image generation takes time, be patient😁.
4. You can download the image after it's generated.

## Prompt I used to build the website

- You will be provided with a hugging face endpoint for generating images using Flux.dev. I want you to integrate the functionality into a Next.js app with the following seven features:

1. There should be a text area for the user to enter the prompt(for the image they want to generate)
2. There should be an image display area where the image will be displayed after it's been generated
3. Let the user know when the image is being generated(you can use a skeleton or a loading functionality)
4. After the image is generated there should be a download button so that the user can download the image that's generated
5. Handle errors(e.g: if the user clicked on the "Generate Image" without a prompt you should tell the user that they should input a prompt first)
6. Add any feature that will make the website look amazing and user-friendly.
7. Don't forget to use best practices and make the user experience good.
- Tech stack to use: Next.js, Tailwind and Shadcn

- The hugging face Endpoint to use:
  
```javascript
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
    // Use image
});
```

## Collaboration
- Collaborations are welcomed ❤️

## Acknowledgments
 - I would like to thank [Bolt.new](https://bolt.new/) for creating such an amazing website to build apps quickly❤️
   
## Contact
 - LinkedIn: [Nebeyou Musie](https://www.linkedin.com/in/nebeyou-musie)
 - Gmail: nebeyoumusie@gmail.com
 - Telegram: [Nebeyou Musie](https://t.me/NebeyouMusie)

## Contact

- [@NebeyouMusie](https://github.com/NebeyouMusie)
- nebeyoumusie@gmail.com

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/NebeyouMusie/Image-Generator)
