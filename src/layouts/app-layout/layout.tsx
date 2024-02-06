import { FC, ReactNode } from "react";

export interface IAppLayout {
  children: ReactNode;
  header: ReactNode;
  withProjectWrapper?: boolean;
}

export const AppLayout: FC<IAppLayout> = (props) => {
  const { children, header, withProjectWrapper = false } = props;

  return (
    <>
      <div className="relative flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <main className="relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100">
          {header}
          <div className="h-full w-full overflow-hidden">
            <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
              {withProjectWrapper ? <>{children}</> : <>{children}</>}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
