# Dynamic Resume Maker

![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) [![Vercel Deployment](https://therealsujitk-vercel-badge.vercel.app/?app=cv-maker&style=for-the-badge&logo=false)](https://cv.bnei.dev) ![svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00) ![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This project is a dynamic resume maker developed using SvelteKit, TailwindCSS, and DaisyUI. It allows users to create personalized resumes featuring customizable sections like experience, skills, and hobbies. Users can edit these sections with their details and also style their resumes with different themes.

Demo : <https://cv.bnei.dev>
Blog: <https://bnei.dev>

## Features

- Add/Edit/Delete resume sections (Experience, Skills, Hobbies etc.)
- Customize the look and feel of the resume
- Download resume in PDF or Word formats
- Multilingual support (French and English versions available)

## Technologies Used

This application is built with the following technologies:

- [SvelteKit](https://kit.svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Installation & Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using either npm or yarn:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## Usage

All data should be filled in the 'lib/data' folder. French and English versions of the +page.svelte file are provided to structure the information in these languages.

1. Navigate to the 'lib/data' folder and choose your preferred language version file (+page.svelte).
2. Fill in your details in the appropriate sections.
3. The application will automatically update your resume.

## Contributing

Contributions to this project are welcome. Please ensure to follow these guidelines:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a new Pull Request

## License Information

Please see the included LICENSE file for more information.

## Contact & Acknowledgements

If you need help or have any feedback, please reach out ([mohammadamine.banaei@pm.me](mailto:mohammadamine.banaei@pm.me)).
Special thanks to all contributors to this project.
