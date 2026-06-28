"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  items: GalleryItem[];
}

const Gallery6 = ({ heading = "Our Partners", items }: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-12 md:flex-row md:items-end">
          <h2 style={{ color: '#1A1F3C' }} className="text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                padding: '10px',
                backgroundColor: '#1A1F3C',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                cursor: canScrollPrev ? 'pointer' : 'not-allowed',
                opacity: canScrollPrev ? 1 : 0.4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
              }}
              className="hover:opacity-80"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                padding: '10px',
                backgroundColor: '#1A1F3C',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                cursor: canScrollNext ? 'pointer' : 'not-allowed',
                opacity: canScrollNext ? 1 : 0.4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
              }}
              className="hover:opacity-80"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel setApi={setCarouselApi} opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
          className="relative">
          <CarouselContent className="-mr-4 ml-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[380px]">
                <div className="flex flex-col">
                  <div style={{
                    aspectRatio: '3/2',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#F7F9FC',
                    border: '1px solid #E8E0D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={item.image} alt={item.title}
                      style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                  </div>
                  <p style={{ color: '#1A1F3C', fontSize: '18px', fontWeight: 700, marginTop: '16px' }}>
                    {item.title}
                  </p>
                  <p style={{ color: '#6B7689', fontSize: '14px', marginTop: '6px', lineHeight: 1.5 }}>
                    {item.summary}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
