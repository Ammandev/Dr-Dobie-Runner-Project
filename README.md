# Dr Dobie Runner

A React + TypeScript + Vite project featuring Unity WebGL integration.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Development Server**:

   ```bash
   npm run dev
   ```

3. **Open Your Browser**:

   Navigate to `http://localhost:5173` to see the application.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Follow the prompts** to complete the deployment.

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub** (if not already done).

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**.

3. **Click "Add New Project"**.

4. **Import your GitHub repository**.

5. **Vercel will auto-detect** the Vercel configuration:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**.

The project is configured with `vercel.json` for optimal Vercel deployment. All routes will be handled by React Router, and the Unity WebGL files will be served from the `/build/` directory.

## Project Structure

- `src/` - Source code
- `public/build/` - Unity WebGL build files
- `dist/` - Production build output

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- react-unity-webgl
