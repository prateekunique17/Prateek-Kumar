import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const scrollRef = useRef<Lenis | null>(null);
    const location = useLocation();

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        scrollRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Reset scroll on route change
    useEffect(() => {
        scrollRef.current?.scrollTo(0, { immediate: true });
    }, [location.pathname]);

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary-500 selection:text-white">
            <CustomCursor />
            <Navbar />
            <main className="relative z-0 min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
