import { PaperAirplaneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { PageInfo } from "@/typings"

type Inputs = {
  name: { value: string }
  email: { value: string }
  subject: { value: string }
  message: { value: string }
}

type Props = {
  pageInfo: PageInfo
  header: string
}

export default function ContactMe({ pageInfo, header }: Props) {
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & Inputs
    const data = {
      email: target.email.value,
      name: target.name.value,
      subject: target.subject.value,
      message: target.message.value,
    }
    window.location.href = `mailto:${pageInfo?.email}?subject=${data.subject}&body=Hello,my name is ${data.name}. ${data.message} (${data.email})`
  }
  return (
    <div
      className="h-screen w-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-7xl pt-36 px-10 justify-evenly
    mx-auto items-center"
    >
      <h3 className="header">{header}</h3>
      <div className="flex flex-col space-y-4">
        <h4 className="font-semibold text-center">
          If you are interested{" "}
          <span className="decoration-custom-aquamarine underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PaperAirplaneIcon className="text-custom-aquamarine h-7 w-7" />
            <p className="">Telegram: {pageInfo?.telegram}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-custom-aquamarine h-7 w-7" />
            <p className="">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-custom-aquamarine h-7 w-7" />
            <p className="">{pageInfo?.address}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col space-y-2 w-fit p-4">
          <div className="flex flex-col md:flex-row gap-2">
            <input name="name" placeholder="Name" className="contactInput" type="text" />
            <input name="email" placeholder="Email" className="contactInput" type="email" />
          </div>

          <input name="subject" placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" name="message" className="contactInput resize-none" />

          <button
            type="submit"
            className="bg-gradient-to-br from-custom-aquamarine to-custom-indigo hover:bg-gradient-to-bl
            focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 py-2
                px-5 rounded-md text-white font-bold
                w-44 self-end"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
