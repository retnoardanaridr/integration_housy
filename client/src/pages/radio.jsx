import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: '1',
    typeof: 'date',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: '2',
    typeof: 'month',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: '3',
    typeof: 'year',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
  {
    name: '4',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
  {
    name: '5+',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-1/4 px-4 py-2">
      <div className="w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Bedrooms</RadioGroup.Label>
          <div className="grid grid-cols-5 gap-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-grey-b'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex justify-center items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

