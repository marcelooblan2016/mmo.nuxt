<template>
    <el-card :class="['availability-card', `style-${variant}`]">
        <template #header>
            <div class="card-header">
                <div class="header-icon-wrapper">
                    <el-icon class="header-icon"><Clock /></el-icon>
                </div>
                <div class="header-content">
                    <span class="header-title">Availability</span>
                    <span class="header-subtitle">My working hours</span>
                </div>
            </div>
        </template>

        <div class="availability-content">
            <!-- Days -->
            <div class="availability-item">
                <div class="item-header">
                    <div class="item-icon-wrapper calendar">
                        <el-icon><Calendar /></el-icon>
                    </div>
                    <div class="item-header-content">
                        <div class="item-label">Days</div>
                        <div class="item-badge">Weekly Schedule</div>
                    </div>
                </div>
                <div class="item-value">
                    <span class="day-range">Monday - Friday</span>
                </div>
            </div>

            <!-- PDT Timezone -->
            <div class="availability-item">
                <div class="item-header">
                    <div class="item-icon-wrapper pdt">
                        <el-icon><LocationFilled /></el-icon>
                    </div>
                    <div class="item-header-content">
                        <div class="item-label">Pacific (PDT)</div>
                        <div class="item-badge">UTC-7</div>
                    </div>
                </div>
                <div class="item-value">
                    <span class="time-range">1:00 PM - 11:00 PM</span>
                    <span class="timezone-indicator">🌆 Afternoon to Night</span>
                </div>
            </div>
            <!-- PH Timezone -->
            <div class="availability-item">
                <div class="item-header">
                    <div class="item-icon-wrapper ph">
                        <el-icon><LocationFilled /></el-icon>
                    </div>
                    <div class="item-header-content">
                        <div class="item-label">Philippines (PHT)</div>
                        <div class="item-badge">UTC+8</div>
                    </div>
                </div>
                <div class="item-value">
                    <span class="time-range">4:00 AM - 2:00 PM</span>
                    <span class="timezone-indicator">🌅 Morning to Afternoon</span>
                </div>
            </div>

        </div>

        <template #footer>
            <div class="card-footer">
                <div class="status-dot"></div>
                <span class="footer-text">Ready to chat within these hours!</span>
                <el-icon class="footer-icon"><Checked /></el-icon>
            </div>
        </template>
    </el-card>
</template>

<script setup>
import { Clock, Calendar, LocationFilled, Checked } from '@element-plus/icons-vue'

defineProps({
    variant: {
        type: String,
        default: 'minimal',
        validator: (value) => ['minimal', 'elevated', 'gradient', 'gradient-blue', 'gradient-custom', 'gradient-light', 'gradient-light-custom', 'glass', 'compact', 'vibrant'].includes(value)
    }
})
</script>

<style scoped>
/* Base Styles */
.availability-card {
    transition: all 0.3s ease;
}

.availability-card :deep(.el-card__header) {
    padding: 0 0 20px 0;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 16px;
}

.header-icon-wrapper {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.header-icon {
    font-size: 28px;
}

.header-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.header-title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.header-subtitle {
    font-size: 13px;
    font-weight: 500;
}

.availability-content {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.availability-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.availability-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #fde047 0%, #facc15 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.item-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.item-icon-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.item-icon-wrapper :deep(.el-icon) {
    font-size: 20px;
}

.item-header-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
}

.item-label {
    font-size: 15px;
    font-weight: 600;
}

.item-badge {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 6px;
    width: fit-content;
}

.item-value {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 52px;
}

.time-range,
.day-range {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
}

.timezone-indicator {
    font-size: 13px;
    font-weight: 500;
}

.availability-item:hover .item-icon-wrapper {
    transform: scale(1.1) rotate(5deg);
}

.availability-item:hover::before {
    transform: scaleX(1);
}

.availability-card :deep(.el-card__footer) {
    padding: 20px 0 0 0;
}

.card-footer {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    padding-top: 12px;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
    }
}

.footer-text {
    font-size: 14px;
    font-weight: 500;
}

.footer-icon {
    font-size: 18px;
    color: #10b981;
}

/* ============================================
   VARIANT: MINIMAL (Default)
   ============================================ */
.style-minimal {
    background: transparent;
    border: none;
    box-shadow: none;
}

.style-minimal :deep(.el-card__header) {
    background: transparent;
    border: none;
}

.style-minimal .header-icon-wrapper {
    background: linear-gradient(135deg, #fef3c7 0%, #fde047 100%);
    box-shadow: 0 2px 8px rgba(234, 179, 8, 0.15);
}

.style-minimal .header-icon {
    color: #ca8a04;
}

.style-minimal .header-title {
    color: #0f172a;
}

.style-minimal .header-subtitle {
    color: #94a3b8;
}

.style-minimal .availability-item {
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.style-minimal .availability-item:hover {
    background: #fffef2;
    box-shadow: 0 6px 16px rgba(234, 179, 8, 0.1);
}

.style-minimal .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #0284c7;
    box-shadow: 0 2px 6px rgba(2, 132, 199, 0.1);
}

.style-minimal .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%);
    color: #dc2626;
    box-shadow: 0 2px 6px rgba(220, 38, 38, 0.1);
}

.style-minimal .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%);
    color: #4f46e5;
    box-shadow: 0 2px 6px rgba(79, 70, 229, 0.1);
}

.style-minimal .item-label {
    color: #0f172a;
}

.style-minimal .item-badge {
    color: #64748b;
    background: #f1f5f9;
}

.style-minimal .time-range,
.style-minimal .day-range {
    color: #1e293b;
}

.style-minimal .timezone-indicator {
    color: #64748b;
}

.style-minimal .footer-text {
    color: #475569;
}

.style-minimal :deep(.el-card__footer) {
    background: transparent;
    border: none;
}

/* ============================================
   VARIANT: ELEVATED
   ============================================ */
.style-elevated {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.style-elevated:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.style-elevated :deep(.el-card__header) {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-bottom: 1px solid #e2e8f0;
    padding: 24px;
}

.style-elevated .header-icon-wrapper {
    background: linear-gradient(135deg, #fef3c7 0%, #fde047 100%);
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.2);
}

.style-elevated .header-icon {
    color: #ca8a04;
}

.style-elevated .header-title {
    color: #0f172a;
}

.style-elevated .header-subtitle {
    color: #94a3b8;
}

.style-elevated .availability-content {
    padding: 24px;
}

.style-elevated .availability-item {
    background: #f8fafc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid #e2e8f0;
}

.style-elevated .availability-item:hover {
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #fde047;
}

.style-elevated .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #0284c7;
    box-shadow: 0 2px 6px rgba(2, 132, 199, 0.1);
}

.style-elevated .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%);
    color: #dc2626;
    box-shadow: 0 2px 6px rgba(220, 38, 38, 0.1);
}

.style-elevated .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%);
    color: #4f46e5;
    box-shadow: 0 2px 6px rgba(79, 70, 229, 0.1);
}

.style-elevated .item-label {
    color: #0f172a;
}

.style-elevated .item-badge {
    color: #64748b;
    background: #f1f5f9;
}

.style-elevated .time-range,
.style-elevated .day-range {
    color: #1e293b;
}

.style-elevated .timezone-indicator {
    color: #64748b;
}

.style-elevated .footer-text {
    color: #475569;
}

.style-elevated :deep(.el-card__footer) {
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    padding: 16px 24px;
}

/* ============================================
   VARIANT: GRADIENT (Purple)
   ============================================ */
.style-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.style-gradient :deep(.el-card__header) {
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px;
    backdrop-filter: blur(10px);
}

.style-gradient .header-icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.style-gradient .header-icon {
    color: #fbbf24;
}

.style-gradient .header-title {
    color: #ffffff;
}

.style-gradient .header-subtitle {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient .availability-content {
    padding: 24px;
}

.style-gradient .availability-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.style-gradient .availability-item:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.style-gradient .item-icon-wrapper.calendar {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient .item-icon-wrapper.ph {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient .item-icon-wrapper.pdt {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient .item-label {
    color: #ffffff;
}

.style-gradient .item-badge {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
}

.style-gradient .time-range,
.style-gradient .day-range {
    color: #ffffff;
}

.style-gradient .timezone-indicator {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient .footer-text {
    color: rgba(255, 255, 255, 0.9);
}

.style-gradient :deep(.el-card__footer) {
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px 24px;
    backdrop-filter: blur(10px);
}

/* ============================================
   VARIANT: GRADIENT-BLUE
   ============================================ */
.style-gradient-blue {
    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
    border: none;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.style-gradient-blue :deep(.el-card__header) {
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px;
    backdrop-filter: blur(10px);
}

.style-gradient-blue .header-icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.style-gradient-blue .header-icon {
    color: #93c5fd;
}

.style-gradient-blue .header-title {
    color: #ffffff;
}

.style-gradient-blue .header-subtitle {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient-blue .availability-content {
    padding: 24px;
}

.style-gradient-blue .availability-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.style-gradient-blue .availability-item:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.style-gradient-blue .availability-item::before {
    background: linear-gradient(90deg, #93c5fd 0%, #60a5fa 100%);
}

.style-gradient-blue .item-icon-wrapper.calendar {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-blue .item-icon-wrapper.ph {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-blue .item-icon-wrapper.pdt {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-blue .item-label {
    color: #ffffff;
}

.style-gradient-blue .item-badge {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
}

.style-gradient-blue .time-range,
.style-gradient-blue .day-range {
    color: #ffffff;
}

.style-gradient-blue .timezone-indicator {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient-blue .footer-text {
    color: rgba(255, 255, 255, 0.9);
}

.style-gradient-blue :deep(.el-card__footer) {
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px 24px;
    backdrop-filter: blur(10px);
}

.style-gradient-blue .status-dot {
    background: #93c5fd;
}

@keyframes pulse-blue {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(147, 197, 253, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(147, 197, 253, 0);
    }
}

.style-gradient-blue .status-dot {
    animation: pulse-blue 2s infinite;
}

/* ============================================
   VARIANT: GRADIENT-CUSTOM (#89AABF)
   ============================================ */
.style-gradient-custom {
    background: linear-gradient(135deg, #89aabf 0%, #5a7a8f 100%);
    border: none;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(137, 170, 191, 0.3);
}

.style-gradient-custom :deep(.el-card__header) {
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px;
    backdrop-filter: blur(10px);
}

.style-gradient-custom .header-icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.style-gradient-custom .header-icon {
    color: #d4e4f0;
}

.style-gradient-custom .header-title {
    color: #ffffff;
}

.style-gradient-custom .header-subtitle {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient-custom .availability-content {
    padding: 24px;
}

.style-gradient-custom .availability-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.style-gradient-custom .availability-item:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.style-gradient-custom .availability-item::before {
    background: linear-gradient(90deg, #d4e4f0 0%, #b8d1df 100%);
}

.style-gradient-custom .item-icon-wrapper.calendar {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-custom .item-icon-wrapper.ph {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-custom .item-icon-wrapper.pdt {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.style-gradient-custom .item-label {
    color: #ffffff;
}

.style-gradient-custom .item-badge {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
}

.style-gradient-custom .time-range,
.style-gradient-custom .day-range {
    color: #ffffff;
}

.style-gradient-custom .timezone-indicator {
    color: rgba(255, 255, 255, 0.8);
}

.style-gradient-custom .footer-text {
    color: rgba(255, 255, 255, 0.9);
}

.style-gradient-custom :deep(.el-card__footer) {
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px 24px;
    backdrop-filter: blur(10px);
}

.style-gradient-custom .status-dot {
    background: #d4e4f0;
}

@keyframes pulse-custom {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(212, 228, 240, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(212, 228, 240, 0);
    }
}

.style-gradient-custom .status-dot {
    animation: pulse-custom 2s infinite;
}

/* ============================================
   VARIANT: GRADIENT-LIGHT (Cyan/Turquoise)
   ============================================ */
.style-gradient-light {
    background: linear-gradient(135deg, #e0f2fe 0%, #cffafe 100%);
    border: 1px solid #a5f3fc;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(165, 243, 252, 0.15);
}

.style-gradient-light :deep(.el-card__header) {
    background: linear-gradient(135deg, #ecf9fd 0%, #f0fdfa 100%);
    border-bottom: 1px solid #a5f3fc;
    padding: 24px;
}

.style-gradient-light .header-icon-wrapper {
    background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.15);
}

.style-gradient-light .header-icon {
    color: #0891b2;
}

.style-gradient-light .header-title {
    color: #164e63;
}

.style-gradient-light .header-subtitle {
    color: #06b6d4;
}

.style-gradient-light .availability-content {
    padding: 24px;
}

.style-gradient-light .availability-item {
    background: #ffffff;
    border: 1px solid #cffafe;
    box-shadow: 0 2px 8px rgba(6, 182, 212, 0.05);
}

.style-gradient-light .availability-item:hover {
    background: #f0fdfa;
    border-color: #06b6d4;
    box-shadow: 0 8px 20px rgba(6, 182, 212, 0.1);
}

.style-gradient-light .availability-item::before {
    background: linear-gradient(90deg, #06b6d4 0%, #0891b2 100%);
}

.style-gradient-light .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
    color: #0891b2;
    box-shadow: 0 2px 6px rgba(6, 182, 212, 0.1);
}

.style-gradient-light .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #fecdd3 0%, #fbcfe8 100%);
    color: #be123c;
    box-shadow: 0 2px 6px rgba(190, 18, 60, 0.1);
}

.style-gradient-light .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #0284c7;
    box-shadow: 0 2px 6px rgba(2, 132, 199, 0.1);
}

.style-gradient-light .item-label {
    color: #164e63;
}

.style-gradient-light .item-badge {
    color: #0891b2;
    background: #ecf9fd;
}

.style-gradient-light .time-range,
.style-gradient-light .day-range {
    color: #164e63;
}

.style-gradient-light .timezone-indicator {
    color: #06b6d4;
}

.style-gradient-light .footer-text {
    color: #164e63;
}

.style-gradient-light :deep(.el-card__footer) {
    background: linear-gradient(135deg, #ecf9fd 0%, #f0fdfa 100%);
    border-top: 1px solid #a5f3fc;
    padding: 16px 24px;
}

.style-gradient-light .status-dot {
    background: #06b6d4;
}

@keyframes pulse-light {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(6, 182, 212, 0);
    }
}

.style-gradient-light .status-dot {
    animation: pulse-light 2s infinite;
}

/* ============================================
   VARIANT: GRADIENT-LIGHT-CUSTOM (#89AABF)
   ============================================ */
.style-gradient-light-custom {
    background: linear-gradient(135deg, #c5dce8 0%, #b8d1df 100%);
    border: 1px solid #89aabf;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(137, 170, 191, 0.15);
}

.style-gradient-light-custom :deep(.el-card__header) {
    background: linear-gradient(135deg, #d4e4f0 0%, #cce0eb 100%);
    border-bottom: 1px solid #89aabf;
    padding: 24px;
}

.style-gradient-light-custom .header-icon-wrapper {
    background: linear-gradient(135deg, #b8d1df 0%, #a0c2d4 100%);
    box-shadow: 0 4px 12px rgba(137, 170, 191, 0.2);
}

.style-gradient-light-custom .header-icon {
    color: #4a6a7f;
}

.style-gradient-light-custom .header-title {
    color: #3d5766;
}

.style-gradient-light-custom .header-subtitle {
    color: #5a7a8f;
}

.style-gradient-light-custom .availability-content {
    padding: 24px;
}

.style-gradient-light-custom .availability-item {
    background: #ffffff;
    border: 1px solid #d4e4f0;
    box-shadow: 0 2px 8px rgba(137, 170, 191, 0.08);
}

.style-gradient-light-custom .availability-item:hover {
    background: #f0f6fb;
    border-color: #89aabf;
    box-shadow: 0 8px 20px rgba(137, 170, 191, 0.12);
}

.style-gradient-light-custom .availability-item::before {
    background: linear-gradient(90deg, #89aabf 0%, #6d94a8 100%);
}

.style-gradient-light-custom .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #b8d1df 0%, #a0c2d4 100%);
    color: #4a6a7f;
    box-shadow: 0 2px 6px rgba(137, 170, 191, 0.12);
}

.style-gradient-light-custom .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #fecdd3 0%, #fbcfe8 100%);
    color: #be123c;
    box-shadow: 0 2px 6px rgba(190, 18, 60, 0.1);
}

.style-gradient-light-custom .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #0284c7;
    box-shadow: 0 2px 6px rgba(2, 132, 199, 0.1);
}

.style-gradient-light-custom .item-label {
    color: #3d5766;
}

.style-gradient-light-custom .item-badge {
    color: #4a6a7f;
    background: #e0ebf3;
}

.style-gradient-light-custom .time-range,
.style-gradient-light-custom .day-range {
    color: #3d5766;
}

.style-gradient-light-custom .timezone-indicator {
    color: #5a7a8f;
}

.style-gradient-light-custom .footer-text {
    color: #3d5766;
}

.style-gradient-light-custom :deep(.el-card__footer) {
    background: linear-gradient(135deg, #d4e4f0 0%, #cce0eb 100%);
    border-top: 1px solid #89aabf;
    padding: 16px 24px;
}

.style-gradient-light-custom .status-dot {
    background: #89aabf;
}

@keyframes pulse-light-custom {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(137, 170, 191, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(137, 170, 191, 0);
    }
}

.style-gradient-light-custom .status-dot {
    animation: pulse-light-custom 2s infinite;
}

/* ============================================
   VARIANT: GLASS
   ============================================ */
.style-glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.style-glass :deep(.el-card__header) {
    background: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 24px;
    backdrop-filter: blur(10px);
}

.style-glass .header-icon-wrapper {
    background: linear-gradient(135deg, #fef3c7 0%, #fde047 100%);
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.25);
}

.style-glass .header-icon {
    color: #ca8a04;
}

.style-glass .header-title {
    color: #0f172a;
}

.style-glass .header-subtitle {
    color: #64748b;
}

.style-glass .availability-content {
    padding: 24px;
}

.style-glass .availability-item {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.style-glass .availability-item:hover {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(253, 224, 71, 0.5);
    box-shadow: 0 8px 20px rgba(234, 179, 8, 0.15);
}

.style-glass .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #0284c7;
}

.style-glass .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%);
    color: #dc2626;
}

.style-glass .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%);
    color: #4f46e5;
}

.style-glass .item-label {
    color: #0f172a;
}

.style-glass .item-badge {
    color: #64748b;
    background: rgba(241, 245, 249, 0.5);
    backdrop-filter: blur(10px);
}

.style-glass .time-range,
.style-glass .day-range {
    color: #1e293b;
}

.style-glass .timezone-indicator {
    color: #64748b;
}

.style-glass .footer-text {
    color: #475569;
}

.style-glass :deep(.el-card__footer) {
    background: rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 16px 24px;
    backdrop-filter: blur(10px);
}

/* ============================================
   VARIANT: COMPACT
   ============================================ */
.style-compact {
    background: transparent;
    border: none;
    box-shadow: none;
}

.style-compact :deep(.el-card__header) {
    background: transparent;
    border: none;
    padding: 0 0 12px 0;
}

.style-compact .header-icon-wrapper {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #fef3c7 0%, #fde047 100%);
    box-shadow: 0 2px 6px rgba(234, 179, 8, 0.12);
}

.style-compact .header-icon {
    font-size: 22px;
    color: #ca8a04;
}

.style-compact .header-title {
    font-size: 18px;
    color: #0f172a;
}

.style-compact .header-subtitle {
    font-size: 11px;
    color: #94a3b8;
}

.style-compact .availability-content {
    gap: 8px;
}

.style-compact .availability-item {
    padding: 12px;
    background: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}

.style-compact .availability-item:hover {
    background: #fffef2;
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.08);
}

.style-compact .item-icon-wrapper {
    width: 32px;
    height: 32px;
}

.style-compact .item-icon-wrapper :deep(.el-icon) {
    font-size: 16px;
}

.style-compact .item-label {
    font-size: 13px;
}

.style-compact .item-badge {
    font-size: 10px;
    padding: 1px 6px;
}

.style-compact .item-value {
    padding-left: 40px;
}

.style-compact .time-range,
.style-compact .day-range {
    font-size: 14px;
}

.style-compact .timezone-indicator {
    font-size: 11px;
}

.style-compact .footer-text {
    font-size: 12px;
}

.style-compact :deep(.el-card__footer) {
    background: transparent;
    border: none;
    padding: 12px 0 0 0;
}

/* ============================================
   VARIANT: VIBRANT
   ============================================ */
.style-vibrant {
    background: linear-gradient(135deg, #fef3c7 0%, #fff8dc 100%);
    border: 2px solid #fde047;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(234, 179, 8, 0.25);
}

.style-vibrant :deep(.el-card__header) {
    background: linear-gradient(135deg, #fef9e7 0%, #fffacd 100%);
    border-bottom: 2px solid #fde047;
    padding: 24px;
}

.style-vibrant .header-icon-wrapper {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    box-shadow: 0 6px 16px rgba(251, 191, 36, 0.3);
}

.style-vibrant .header-icon {
    color: #ffffff;
    font-size: 32px;
}

.style-vibrant .header-title {
    color: #b45309;
    font-weight: 800;
    font-size: 24px;
}

.style-vibrant .header-subtitle {
    color: #d97706;
    font-weight: 600;
}

.style-vibrant .availability-content {
    padding: 24px;
}

.style-vibrant .availability-item {
    background: #ffffff;
    border: 2px solid #fde047;
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.15);
}

.style-vibrant .availability-item:hover {
    background: #fffbf0;
    border-color: #f59e0b;
    box-shadow: 0 8px 20px rgba(245, 158, 11, 0.25);
    transform: translateY(-2px);
}

.style-vibrant .availability-item::before {
    background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
    height: 3px;
}

.style-vibrant .item-icon-wrapper.calendar {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(251, 191, 36, 0.2);
}

.style-vibrant .item-icon-wrapper.ph {
    background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(239, 68, 68, 0.2);
}

.style-vibrant .item-icon-wrapper.pdt {
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
}

.style-vibrant .item-label {
    color: #92400e;
    font-weight: 700;
}

.style-vibrant .item-badge {
    color: #b45309;
    background: #fef3c7;
    font-weight: 600;
}

.style-vibrant .time-range,
.style-vibrant .day-range {
    color: #92400e;
    font-weight: 700;
}

.style-vibrant .timezone-indicator {
    color: #b45309;
    font-weight: 600;
}

.style-vibrant .footer-text {
    color: #b45309;
    font-weight: 600;
}

.style-vibrant :deep(.el-card__footer) {
    background: linear-gradient(135deg, #fef9e7 0%, #fffacd 100%);
    border-top: 2px solid #fde047;
    padding: 16px 24px;
}

/* Dark Mode Support */
:global(.dark) .style-minimal .availability-item,
:global(.dark) .style-compact .availability-item {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

:global(.dark) .style-minimal .header-title,
:global(.dark) .style-compact .header-title {
    color: #f1f5f9;
}

:global(.dark) .style-elevated {
    background: #1e293b;
    border-color: #334155;
}

:global(.dark) .style-glass {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(71, 85, 105, 0.3);
}

:global(.dark) .style-gradient-light {
    background: linear-gradient(135deg, #1e3a3a 0%, #164e63 100%);
    border-color: #0891b2;
}

:global(.dark) .style-gradient-light :deep(.el-card__header) {
    background: linear-gradient(135deg, #164e63 0%, #0f2f36 100%);
    border-bottom-color: #0891b2;
}

:global(.dark) .style-gradient-light .header-title {
    color: #cffafe;
}

:global(.dark) .style-gradient-light .header-subtitle {
    color: #a5f3fc;
}

:global(.dark) .style-gradient-light .availability-item {
    background: rgba(165, 243, 252, 0.1);
    border-color: #0891b2;
}

:global(.dark) .style-gradient-light .item-label {
    color: #cffafe;
}

:global(.dark) .style-gradient-light-custom {
    background: linear-gradient(135deg, #3d5766 0%, #2d4556 100%);
    border-color: #5a7a8f;
}

:global(.dark) .style-gradient-light-custom :deep(.el-card__header) {
    background: linear-gradient(135deg, #4a6a7f 0%, #3d5766 100%);
    border-bottom-color: #5a7a8f;
}

:global(.dark) .style-gradient-light-custom .header-title {
    color: #d4e4f0;
}

:global(.dark) .style-gradient-light-custom .header-subtitle {
    color: #b8d1df;
}

:global(.dark) .style-gradient-light-custom .availability-item {
    background: rgba(137, 170, 191, 0.1);
    border-color: #4a6a7f;
}

:global(.dark) .style-gradient-light-custom .availability-item:hover {
    background: rgba(137, 170, 191, 0.15);
    border-color: #89aabf;
}

:global(.dark) .style-gradient-light-custom .item-label {
    color: #d4e4f0;
}

:global(.dark) .style-gradient-light-custom .item-badge {
    color: #b8d1df;
    background: rgba(137, 170, 191, 0.2);
}

:global(.dark) .style-gradient-light-custom .time-range,
:global(.dark) .style-gradient-light-custom .day-range {
    color: #d4e4f0;
}

/* Responsive */
@media (max-width: 640px) {
    .style-minimal :deep(.el-card__header),
    .style-elevated :deep(.el-card__header) {
        padding: 16px;
    }

    .style-elevated .availability-content {
        padding: 16px;
    }

    .style-gradient .availability-content {
        padding: 16px;
    }

    .style-gradient-blue .availability-content {
        padding: 16px;
    }

    .style-gradient-custom .availability-content {
        padding: 16px;
    }

    .style-gradient-light .availability-content {
        padding: 16px;
    }

    .style-gradient-light-custom .availability-content {
        padding: 16px;
    }

    .style-glass .availability-content {
        padding: 16px;
    }

    .style-vibrant .availability-content {
        padding: 16px;
    }

    .header-title {
        font-size: 18px;
    }

    .availability-item {
        padding: 12px;
    }

    .time-range,
    .day-range {
        font-size: 14px;
    }
}
</style>
