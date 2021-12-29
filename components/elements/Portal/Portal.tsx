import { createPortal } from "react-dom";

import { useEffect, useState, useRef, ReactNode } from "react";

interface ProtalProps {
  children: ReactNode;
  selector: string;
}

function Portal(props: ProtalProps) {
  const { children, selector } = props;

  const [mounted, setMounted] = useState<boolean>(false);

  const ref = useRef<Element | null>();

  useEffect(() => {
    if (selector) {
      ref.current = document.querySelector(selector);
    }
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
}

export default Portal;
