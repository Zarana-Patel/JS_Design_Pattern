// EventEmitter.js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  subscribe(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Unsubscribe from an event
  unsubscribe(event, listenerToRemove) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Emit an event
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  }
}

export const emitter = new EventEmitter();
