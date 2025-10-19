import { Children, useState, type ComponentProps, type PropsWithChildren } from "react";


type TabsProps = ComponentProps<'div'> & PropsWithChildren<{
  tabs: {
    key: string;
    name: string;
  }[];
  initialTab?: string;
}>;


export function Tabs(props: TabsProps) {
  const {
    tabs,
    initialTab = tabs[0]?.key || null,
    children,
    className = '',
    ...rest
  } = props;
  const [selected, setSelected] = useState<string | null>(initialTab);
  const selectedIdx = tabs.findIndex((tab) => tab.key === selected);
  
  return (
    <div
      className={`tabs ${className}`}
      {...rest}
    >
      <div className='tabs__headers flex flex-row justify-stretch gap-2 w-full'>
        { tabs.map((tab) => {
          return (
            <div
              className='tabs__header p-2 flex flex-row justify-center items-center border border-gray-400 rounded cursor-pointer grow'
              key={tab.key}
              onClick={() => setSelected(tab.key)}
            >
              <span className='tabs__header__content'>
                { tab.name }
              </span>
            </div>
          )
        })}
      </div>

      <div className='tabs__content overflow-hidden'>
        <div
          className='flex flex-row items-center justify-stretch transition-all'
          style={{
            transform: `translateX(-${selectedIdx * 100}%)`
          }}
        >
          { Children.map(children, (child, i) => {
            return (
              <div
                className='tabs__tab w-full grow shrink-0 transition-all'
                key={tabs[i]?.key}
                style={{
                  opacity: selected === tabs[i]?.key ? 1 : 0,
                }}
              >
                { child }
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}