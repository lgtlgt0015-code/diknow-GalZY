---
title: "关于"
slug: "about"
description: "关于本站"
---

<style>
    .about-fullscreen {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: calc(100vh - 120px) !important;
        width: 100% !important;
        padding: 40px !important;
    }

    .about-text {
        font-size: clamp(2rem, 5vw, 4.5rem) !important;
        font-weight: 700 !important;
        letter-spacing: 0.15em !important;
        text-align: center !important;
        line-height: 1.4 !important;
        animation: aboutFadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
        opacity: 0 !important;
        user-select: none !important;
        background: linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 50%, #f0abfc 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        position: relative !important;
    }

    .about-text::after {
        content: '' !important;
        position: absolute !important;
        bottom: -12px !important;
        left: 50% !important;
        transform: translateX(-50%) scaleX(0) !important;
        width: 60% !important;
        height: 2px !important;
        background: linear-gradient(90deg, transparent, rgba(165, 180, 252, 0.6), transparent) !important;
        border-radius: 1px !important;
        animation: lineExpand 0.8s 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
    }

    @keyframes aboutFadeIn {
        from { opacity: 0; transform: translateY(24px) scale(0.96); filter: blur(8px); }
        to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }

    @keyframes lineExpand {
        to { transform: translateX(-50%) scaleX(1); }
    }
</style>

<div class="about-fullscreen">
    <div class="about-text">我什么也不清楚</div>
</div>
