import React from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export const Car = ({ car }) => {
    return (
        <div className="p-5 flex space-x-2">
            <div className="flex-1">
                <div className="flex justify between items-center">
                    <div>
                        <span className="text-gray-800">{car.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">
                            {dayjs(car.created_at).fromNow()}
                        </small>
                    </div>
                </div>
          <p className="mt-4 text-lg text-gray-900">{car.title}</p>
          <p className="mt-4 text-lg text-gray-900">{car.body}</p>
            </div>
        </div>
    );
};
