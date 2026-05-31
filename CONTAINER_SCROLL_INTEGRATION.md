# Container Scroll Animation - Integration Guide

## ✅ Component Successfully Integrated

### Files Created
1. **`src/components/ui/container-scroll-animation.tsx`** - Main component
2. **`src/components/ui/hero-scroll-demo.tsx`** - Demo/example component

---

## 📋 Project Status

### Already Available ✅
- TypeScript
- Tailwind CSS  
- Framer Motion (v12.40.0)
- Next.js 16 with App Router
- `/src/components/ui` folder structure

### No Additional Installation Required ✅
All dependencies were already present in the project.

---

## 🎯 How to Use

### Basic Usage

```tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function MyPage() {
  return (
    <ContainerScroll
      titleComponent={
        <h1 className="text-4xl font-bold">
          Your Title Here
        </h1>
      }
    >
      <Image
        src="/your-image.jpg"
        alt="description"
        width={1400}
        height={720}
        className="rounded-2xl object-cover"
      />
    </ContainerScroll>
  );
}
```

### Using the Demo Component

```tsx
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";

export default function Page() {
  return <HeroScrollDemo />;
}
```

---

## 🎨 Customization for FixedGap Brand

The component uses generic colors. To match FixedGap's brand:

### Current Colors (Generic)
- Border: `#6C6C6C`
- Background: `#222222`
- Shadow: Dark with multiple layers

### Suggested FixedGap Colors
Replace in `container-scroll-animation.tsx`:

```tsx
// Line 90-91: Card component
className="... border-[#1F4C9C] ... bg-[#0A0F1E] ..."
//              ↑ FixedGap Blue    ↑ FixedGap Navy
```

---

## 📐 Component Props

### `ContainerScroll`
| Prop | Type | Description |
|------|------|-------------|
| `titleComponent` | `string \| React.ReactNode` | Title/header content |
| `children` | `React.ReactNode` | Content to display (usually an image) |

### Behavior
- **Desktop**: Scales from 1.05 → 1.0, rotates from 20deg → 0deg
- **Mobile** (≤768px): Scales from 0.7 → 0.9, same rotation
- **Scroll-based**: Uses Framer Motion's `scrollYProgress`

---

## 🔧 Where to Use in FixedGap

### Suggested Placements

1. **Product Dashboard Page** (`/product/dashboard`)
   - Show dashboard UI rotating into view
   
2. **Product Experience Page** (`/product/experience`)
   - Display game walkthrough

3. **Demo Page** (`/demo`)
   - Replace static video placeholders with this animated view

4. **Home Page Hero** (alternative to current hero)
   - Create dramatic entrance for main visual

---

## 💡 Integration Example for /product/dashboard

```tsx
// src/app/product/dashboard/page.tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      
      {/* Existing hero section... */}
      
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-5xl font-bold text-brand-navy">
              Real-time Clinical Insights
            </h2>
            <p className="text-brand-muted mt-4">
              See what neurologists see after each session
            </p>
          </>
        }
      >
        <Image
          src="/dashboard-preview.jpg"
          alt="FixedGap Clinical Dashboard"
          width={1400}
          height={720}
          className="rounded-2xl object-cover"
        />
      </ContainerScroll>
      
      {/* Rest of page... */}
      <Footer />
    </main>
  );
}
```

---

## 🚀 Next Steps

1. **Choose integration location** - Decide which page needs this effect
2. **Prepare assets** - Create/export high-quality screenshots or mockups
3. **Customize colors** - Update border/background to match FixedGap brand
4. **Adjust spacing** - The component has large vertical padding (`pt-[1000px] pb-[500px]` in demo) - adjust as needed
5. **Test responsive** - Verify mobile experience

---

## 📝 Notes

- Component is fully typed with TypeScript
- Uses `"use client"` directive (required for Framer Motion)
- Image should be high resolution (1400x720 minimum recommended)
- Scroll animation is smooth and performant
- No external API calls or data fetching required

---

## ✅ Build Status

Component compiles successfully with no errors or warnings.
Ready to use in production.
