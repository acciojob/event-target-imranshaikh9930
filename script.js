class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {

		if(!this.listeners.has[event]){

			this.listeners.set(event,[]);
		}

		const listeners - this.listeners.get(event);
		if(!listeners.includes(callback)){
			listeners.push(callback);
		}
    }
  
    removeEventListener(event, callback) {
      if (this.listeners.has(event)) {
            const listeners = this.listeners.get(event).filter(listener => listener !== callback);
            this.listeners.set(event, listeners);
        }
    }
  
    dispatchEvent(event) {
    if (this.listeners.has(event)) {
            const listeners = this.listeners.get(event);
            listeners.forEach(callback => {
                callback();
            });
        }
    }
    
  }
  
