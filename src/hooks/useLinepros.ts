import { useMemo } from "react";

const lpActions = {
  showLogin: () => window.parent.postMessage({ "banner-click": { action: 'show-login'}}, '*'),
  showJoin: () => window.parent.postMessage({ "banner-click": { action: 'show-join'}}, '*'),
  showDeposits: () => window.parent.postMessage({ "banner-click": { action: 'show-deposits'}}, '*'),
  showPayouts: () => window.parent.postMessage({ 'banner-click': { action: 'show-payouts' } }, '*'),
  showSports: () => window.parent.postMessage({ 'banner-click': { action: 'show-sport', params: { partnerProduct: 'prematch' } }}, '*'),
  showLiveBetting: () => window.parent.postMessage({ 'banner-click': { action: 'show-sport', params: { partnerProduct: 'live' } }}, '*')
};

export const useLinepros = () => {
  return useMemo(() => ({
    trackHeight: () => {
      let timeout: NodeJS.Timeout;
      const observer = new ResizeObserver(() => {
        if (timeout) {
          window.clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          window.parent.postMessage({ 'full-content-height': document.body['scrollHeight'] }, '*')
        }, 400)
      });
      observer.observe(document.body);
    },
    actions: lpActions
  }), []);
}