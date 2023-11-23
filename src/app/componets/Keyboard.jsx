import React from 'react'

const Keyboard = () => {
  return (
    <div>
      <div className="bg-purple-700 p-3 rounded-lg border-2 border-t-purple-600 border-x-purple-800 border-b-purple-900 shadow-lg">
			<div className="p-1 bg-purple-900 rounded overflow-hidden">
				<div className="flex space-x-[2px]">
					<div
					
						 
						 className="h-10 min-w-10"
						 >
						<button 
							className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
							>
							<div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
							</div>
							<div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
								<span className="leading-none">{}</span>
							</div>
						</button>
					</div>
				</div>
				<div className="flex space-x-[2px] mt-[2px]">
					<div
						 v-for="key in keys"
						 v-if="key.row === '2'"
						
						 className="h-10 min-w-10"
						 >
						<button 
							className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
							>
							<div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
							</div>
							<div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
								<span className="leading-none">{}</span>
								</div>
						</button>
					</div>
				</div>
				<div className="flex space-x-[2px] mt-[2px]">
					<div
						 v-for="key in keys"
						 v-if="key.row === '3'"
						
						 className="h-10 min-w-10"
						 >
						<button 
							className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
							>
							<div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
							</div>
							<div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
								<span className="leading-none">{}</span>
								</div>
						</button>
					</div>
				</div>
				<div className="flex space-x-[2px] mt-[2px]">
					<div
						 v-for="key in keys"
						 v-if="key.row === '4'"
						
						 className="h-10 min-w-10"
						 >
						<button 
							className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
							>
							<div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
							</div>
							<div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
								<span className="leading-none">{}</span>
								</div>
						</button>
					</div>
				</div>
				<div className="flex space-x-[2px] mt-[2px]">
					<div
						 v-for="key in keys"
						 v-if="key.row === '5'"
						
						 className="h-10 min-w-10"
						 >
						<button 
							className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
							>
							<div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
								<div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
							</div>
							<div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
								<span className="leading-none">{}</span>
								</div>
						</button>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Keyboard
